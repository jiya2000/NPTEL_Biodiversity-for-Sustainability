/**
 * NPTEL Biodiversity for Sustainability - Core Application Logic
 * Implements Week switcher, Tab navigation, Searchable Glossary,
 * 3D Flashcards, Exam & Study Quiz Engine, and LocalStorage Progress Tracker.
 */

(function () {
  'use strict';

  // --- State Store ---
  const state = {
    currentWeek: 1,
    activeTab: 'notes',
    searchTerm: '',
    selectedCategory: 'all',
    flashcardIndex: 0,
    isCardFlipped: false,
    shuffledCards: [],
    masteredCards: new Set(),
    
    // Practice Quiz (20 Qs)
    practice: {
      mode: 'study', // 'study' or 'exam'
      answers: {},
      isSubmitted: false,
      score: 0,
      timeRemaining: 20 * 60,
      timerId: null
    },

    // Assignment 1 (10 Qs)
    assignment: {
      mode: 'study',
      answers: {},
      isSubmitted: false,
      score: 0
    }
  };

  // --- LocalStorage Keys ---
  const STORAGE_KEY_PROGRESS = 'nptel_bio_progress_v1';
  const STORAGE_KEY_THEME = 'color-scheme';

  // --- Load Saved Progress ---
  function loadSavedProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.masteredCards) state.masteredCards = new Set(data.masteredCards);
        if (data.practiceScore !== undefined) state.practice.score = data.practiceScore;
        if (data.assignmentScore !== undefined) state.assignment.score = data.assignmentScore;
      }
    } catch (e) {
      console.warn('Could not load saved progress', e);
    }
  }

  function saveProgress() {
    try {
      const data = {
        masteredCards: Array.from(state.masteredCards),
        practiceScore: state.practice.score,
        assignmentScore: state.assignment.score,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(data));
      updateProgressDashboard();
    } catch (e) {
      console.warn('Could not save progress', e);
    }
  }

  // --- Theme Management ---
  function initTheme() {
    const metaScheme = document.querySelector('meta[name="color-scheme"]');
    const themeBtn = document.getElementById('theme-toggle-btn');
    const storedTheme = localStorage.getItem(STORAGE_KEY_THEME) || 'light dark';

    function applyTheme(theme) {
      if (metaScheme) metaScheme.content = theme;
      if (theme === 'dark') {
        document.documentElement.dataset.theme = 'dark';
      } else if (theme === 'light') {
        document.documentElement.dataset.theme = 'light';
      } else {
        delete document.documentElement.dataset.theme;
      }
      updateThemeButtonIcon(theme);
    }

    function updateThemeButtonIcon(theme) {
      if (!themeBtn) return;
      const isDark = theme === 'dark' || (theme === 'light dark' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      themeBtn.innerHTML = isDark
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      themeBtn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      themeBtn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }

    applyTheme(storedTheme);

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const isCurrentlyDark = document.documentElement.dataset.theme === 'dark' || 
          (!document.documentElement.dataset.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
        const newTheme = isCurrentlyDark ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY_THEME, newTheme);
        applyTheme(newTheme);
      });
    }

    // Listen to system scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (!localStorage.getItem(STORAGE_KEY_THEME)) {
        updateThemeButtonIcon('light dark');
      }
    });
  }

  // --- Week Selector Logic ---
  function initWeekSelector() {
    const container = document.getElementById('week-scroll-container');
    if (!container) return;

    container.innerHTML = '';
    const totalWeeks = window.COURSE_DATA.meta.totalWeeks || 12;

    for (let w = 1; w <= totalWeeks; w++) {
      const weekData = window.COURSE_DATA.weeks[w];
      const isAvailable = weekData && weekData.status === 'available';
      const isActive = w === state.currentWeek;

      const chip = document.createElement('div');
      chip.className = `week-chip ${isActive ? 'active' : ''} ${!isAvailable ? 'locked' : ''}`;
      chip.id = `week-chip-${w}`;
      chip.innerHTML = `
        <div class="chip-header">
          <span class="chip-week">Week ${w}</span>
          <span class="chip-status ${isAvailable ? 'ready' : 'locked'}">${isAvailable ? 'Active' : '🔒 Locked'}</span>
        </div>
        <div class="chip-desc">${weekData ? weekData.title : 'Upcoming'}</div>
      `;

      chip.addEventListener('click', () => {
        if (isAvailable) {
          selectWeek(w);
        } else {
          showUpcomingModal(w, weekData ? weekData.title : 'Coming Soon');
        }
      });

      container.appendChild(chip);
    }
  }

  function selectWeek(weekNum) {
    state.currentWeek = weekNum;
    document.querySelectorAll('.week-chip').forEach(c => c.classList.remove('active'));
    const activeChip = document.getElementById(`week-chip-${weekNum}`);
    if (activeChip) activeChip.classList.add('active');

    // Update Hero text
    const weekData = window.COURSE_DATA.weeks[weekNum];
    if (weekData) {
      document.getElementById('hero-week-tag').textContent = `Week ${weekNum} • ${weekData.badge || 'Ready'}`;
      document.getElementById('hero-title').textContent = weekData.title;
      document.getElementById('hero-subtitle').textContent = weekData.subtitle;
    }

    renderActiveView();
  }

  // --- Modal Helpers ---
  function showUpcomingModal(weekNum, weekTitle) {
    const modal = document.getElementById('upcoming-modal');
    const modalTitle = document.getElementById('modal-week-title');
    const modalDesc = document.getElementById('modal-week-desc');
    
    if (modalTitle) modalTitle.textContent = `Week ${weekNum}: ${weekTitle}`;
    if (modalDesc) {
      modalDesc.innerHTML = `
        <strong>Material for Week ${weekNum} is queued for upload.</strong><br>
        As you study through the NPTEL semester, simply provide the lecture revision PDF or assignment for Week ${weekNum}, and it will instantly go live here with interactive quizzes, notes, and flashcards!
      `;
    }
    if (modal) modal.classList.add('open');
  }

  function closeModal() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  }

  // --- Tab Navigation Logic ---
  function initTabs() {
    const tabs = document.querySelectorAll('.nav-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetView = tab.dataset.tab;
        switchTab(targetView);
      });
    });

    // Check URL Hash on load
    const hash = window.location.hash.replace('#', '');
    if (hash && ['notes', 'glossary', 'flashcards', 'practice-quiz', 'assignment-quiz', 'progress'].includes(hash)) {
      switchTab(hash);
    }
  }

  function switchTab(tabId) {
    state.activeTab = tabId;
    window.location.hash = tabId;

    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `view-${tabId}`);
    });

    renderActiveView();
    window.scrollTo({ top: 320, behavior: 'smooth' });
  }

  function renderActiveView() {
    const weekData = window.COURSE_DATA.weeks[state.currentWeek];
    if (!weekData) return;

    switch (state.activeTab) {
      case 'notes':
        renderNotes(weekData);
        break;
      case 'glossary':
        renderGlossary(weekData);
        break;
      case 'flashcards':
        renderFlashcards(weekData);
        break;
      case 'practice-quiz':
        renderPracticeQuiz(weekData);
        break;
      case 'assignment-quiz':
        renderAssignmentQuiz(weekData);
        break;
      case 'progress':
        updateProgressDashboard();
        break;
    }
  }

  // --- 1. Render High-Yield Notes ---
  function renderNotes(weekData) {
    // Hierarchy
    const hierarchyContainer = document.getElementById('hierarchy-container');
    if (hierarchyContainer && weekData.hierarchy) {
      hierarchyContainer.innerHTML = weekData.hierarchy.map(item => `
        <div class="hierarchy-step">
          <div class="hierarchy-level-badge">${item.icon}</div>
          <div class="hierarchy-info">
            <h3>Level ${item.level}: ${item.name}</h3>
            <p>${item.def}</p>
            <span class="hierarchy-example">Example: ${item.example}</span>
          </div>
        </div>
      `).join('');
    }

    // Pillars
    const pillarsContainer = document.getElementById('pillars-container');
    if (pillarsContainer && weekData.pillars) {
      pillarsContainer.innerHTML = weekData.pillars.map(p => `
        <div class="glass-card" style="border-top: 4px solid ${p.color};">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">${p.icon}</div>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: ${p.color};">${p.title}</h3>
          <p style="font-size: 0.9rem; color: var(--text-muted);">${p.desc}</p>
        </div>
      `).join('');
    }

    // Ecosystem Services
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer && weekData.services) {
      servicesContainer.innerHTML = weekData.services.map(s => `
        <div class="glass-card">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
            <span style="font-size: 1.75rem;">${s.icon}</span>
            <div>
              <h4 style="font-size: 1.05rem; margin: 0;">${s.name}</h4>
              <span class="hierarchy-example">${s.benefit}</span>
            </div>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">${s.desc}</p>
        </div>
      `).join('');
    }

    // Traps
    const trapsContainer = document.getElementById('traps-container');
    if (trapsContainer && weekData.traps) {
      trapsContainer.innerHTML = weekData.traps.map(t => `
        <div class="trap-card">
          <div class="trap-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/></svg>
            ${t.concept}
          </div>
          <div class="trap-warning"><strong>Common Trap:</strong> ${t.trap}</div>
          <div class="trap-rule"><strong>Exam Rule:</strong> ${t.rule}</div>
        </div>
      `).join('');
    }
  }

  // --- 2. Render Glossary / Searchable Definitions ---
  function renderGlossary(weekData) {
    const listContainer = document.getElementById('definitions-grid');
    const countBadge = document.getElementById('glossary-count-badge');
    if (!listContainer || !weekData.definitions) return;

    let items = weekData.definitions;

    // Filter by Category
    if (state.selectedCategory !== 'all') {
      items = items.filter(d => d.category.toLowerCase() === state.selectedCategory.toLowerCase());
    }

    // Filter by Search Query
    if (state.searchTerm.trim() !== '') {
      const q = state.searchTerm.toLowerCase();
      items = items.filter(d => 
        d.term.toLowerCase().includes(q) || 
        d.definition.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q)
      );
    }

    if (countBadge) {
      countBadge.textContent = `Showing ${items.length} of ${weekData.definitions.length} terms`;
    }

    if (items.length === 0) {
      listContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-dim);">
          <p style="font-size: 1.1rem; font-weight: 600;">No terms found matching "${state.searchTerm}"</p>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Try clearing your search query or switching categories.</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = items.map(d => `
      <div class="definition-card">
        <div>
          <div class="def-top">
            <span class="def-term">${d.term}</span>
            <span class="def-category">${d.category}</span>
          </div>
          <p class="def-body">${d.definition}</p>
        </div>
        <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: flex-end;">
          <button class="btn-pill btn-pill-ghost btn-copy-def" data-text="${d.term}: ${d.definition}" style="padding: 0.25rem 0.65rem; font-size: 0.75rem;">
            📋 Copy Term
          </button>
        </div>
      </div>
    `).join('');

    // Attach copy handlers
    listContainer.querySelectorAll('.btn-copy-def').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = btn.dataset.text;
        navigator.clipboard.writeText(text).then(() => {
          const original = btn.innerHTML;
          btn.innerHTML = '✅ Copied!';
          setTimeout(() => { btn.innerHTML = original; }, 1500);
        });
      });
    });
  }

  function initGlossaryControls() {
    const searchInput = document.getElementById('glossary-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchTerm = e.target.value;
        const weekData = window.COURSE_DATA.weeks[state.currentWeek];
        renderGlossary(weekData);
      });
    }

    const catChips = document.querySelectorAll('.cat-chip');
    catChips.forEach(chip => {
      chip.addEventListener('click', () => {
        catChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.selectedCategory = chip.dataset.cat;
        const weekData = window.COURSE_DATA.weeks[state.currentWeek];
        renderGlossary(weekData);
      });
    });
  }

  // --- 3. Interactive Flashcards ---
  function renderFlashcards(weekData) {
    if (!weekData.flashcards || weekData.flashcards.length === 0) return;

    if (state.shuffledCards.length === 0) {
      state.shuffledCards = [...weekData.flashcards];
    }

    const card = state.shuffledCards[state.flashcardIndex];
    const total = state.shuffledCards.length;

    const counter = document.getElementById('flashcard-counter');
    const fill = document.getElementById('flashcard-progress-fill');
    const flashcardEl = document.getElementById('active-flashcard');
    const masteredBadge = document.getElementById('mastered-counter-badge');

    if (counter) counter.textContent = `Card ${state.flashcardIndex + 1} of ${total}`;
    if (fill) fill.style.width = `${((state.flashcardIndex + 1) / total) * 100}%`;
    if (masteredBadge) masteredBadge.textContent = `${state.masteredCards.size} / ${total} Mastered`;

    if (flashcardEl && card) {
      // Reset flip
      flashcardEl.classList.remove('flipped');
      state.isCardFlipped = false;

      document.getElementById('card-front-tag').textContent = card.category;
      document.getElementById('card-front-prompt').textContent = card.front;
      document.getElementById('card-front-hint').textContent = `💡 Hint: ${card.hint || 'Tap card to reveal answer'}`;

      document.getElementById('card-back-tag').textContent = `${card.category} • Solution`;
      document.getElementById('card-back-answer').textContent = card.back;
    }
  }

  function initFlashcardControls() {
    const cardEl = document.getElementById('active-flashcard');
    const flipBtn = document.getElementById('btn-flip-card');
    const prevBtn = document.getElementById('btn-prev-card');
    const nextBtn = document.getElementById('btn-next-card');
    const shuffleBtn = document.getElementById('btn-shuffle-cards');
    const masterBtn = document.getElementById('btn-mark-mastered');

    function toggleFlip() {
      if (!cardEl) return;
      state.isCardFlipped = !state.isCardFlipped;
      cardEl.classList.toggle('flipped', state.isCardFlipped);
    }

    if (cardEl) cardEl.addEventListener('click', toggleFlip);
    if (flipBtn) flipBtn.addEventListener('click', toggleFlip);

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (state.flashcardIndex > 0) {
          state.flashcardIndex--;
          renderFlashcards(window.COURSE_DATA.weeks[state.currentWeek]);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (state.flashcardIndex < state.shuffledCards.length - 1) {
          state.flashcardIndex++;
          renderFlashcards(window.COURSE_DATA.weeks[state.currentWeek]);
        }
      });
    }

    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        state.shuffledCards.sort(() => Math.random() - 0.5);
        state.flashcardIndex = 0;
        renderFlashcards(window.COURSE_DATA.weeks[state.currentWeek]);
      });
    }

    if (masterBtn) {
      masterBtn.addEventListener('click', () => {
        const currentCard = state.shuffledCards[state.flashcardIndex];
        if (currentCard) {
          state.masteredCards.add(currentCard.id);
          saveProgress();
          // Advance to next card if available
          if (state.flashcardIndex < state.shuffledCards.length - 1) {
            state.flashcardIndex++;
          }
          renderFlashcards(window.COURSE_DATA.weeks[state.currentWeek]);
        }
      });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (state.activeTab !== 'flashcards') return;
      if (e.code === 'Space') {
        e.preventDefault();
        toggleFlip();
      } else if (e.code === 'ArrowRight' && nextBtn) {
        nextBtn.click();
      } else if (e.code === 'ArrowLeft' && prevBtn) {
        prevBtn.click();
      }
    });
  }

  // --- 4. Practice Quiz Engine (20 Questions) ---
  function renderPracticeQuiz(weekData) {
    const container = document.getElementById('practice-questions-list');
    if (!container || !weekData.practiceMCQs) return;

    const questions = weekData.practiceMCQs;
    const answeredCount = Object.keys(state.practice.answers).length;
    const scoreBadge = document.getElementById('practice-score-badge');
    if (scoreBadge) {
      scoreBadge.textContent = state.practice.isSubmitted 
        ? `Score: ${state.practice.score} / ${questions.length} (${Math.round((state.practice.score / questions.length) * 100)}%)`
        : `Answered: ${answeredCount} / ${questions.length}`;
    }

    container.innerHTML = questions.map((q, idx) => {
      const selected = state.practice.answers[q.id];
      const isAnswered = selected !== undefined;
      const showFeedback = state.practice.mode === 'study' ? isAnswered : state.practice.isSubmitted;

      return `
        <div class="question-card" id="practice-q-${q.id}">
          <div class="question-meta">
            <span class="q-number">Question ${idx + 1} of ${questions.length}</span>
            <span class="q-status-badge ${isAnswered ? 'chip-status ready' : 'chip-status locked'}">
              ${isAnswered ? 'Answered' : 'Unanswered'}
            </span>
          </div>
          <h3 class="q-title">${q.question}</h3>
          <div class="options-list">
            ${q.options.map((opt, optIdx) => {
              const letter = String.fromCharCode(65 + optIdx);
              let optionClass = 'option-btn';
              if (selected === optIdx) optionClass += ' selected';
              if (showFeedback) {
                if (optIdx === q.correct) optionClass += ' correct';
                else if (selected === optIdx) optionClass += ' incorrect';
              }
              return `
                <button class="${optionClass}" data-qid="${q.id}" data-opt="${optIdx}" ${showFeedback && state.practice.mode === 'study' ? 'disabled' : ''}>
                  <span class="option-letter">${letter}</span>
                  <span>${opt}</span>
                </button>
              `;
            }).join('')}
          </div>
          ${showFeedback ? `
            <div class="explanation-box">
              <div class="explanation-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                Correct Answer: Option ${q.letter} • Why this is correct:
              </div>
              <div class="explanation-text">${q.explanation}</div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Attach click events to options
    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = parseInt(btn.dataset.qid, 10);
        const opt = parseInt(btn.dataset.opt, 10);
        handlePracticeAnswer(qid, opt);
      });
    });
  }

  function handlePracticeAnswer(qid, optIdx) {
    state.practice.answers[qid] = optIdx;
    
    // Recalculate score
    const weekData = window.COURSE_DATA.weeks[state.currentWeek];
    let correctCount = 0;
    weekData.practiceMCQs.forEach(q => {
      if (state.practice.answers[q.id] === q.correct) correctCount++;
    });
    state.practice.score = correctCount;
    saveProgress();

    renderPracticeQuiz(weekData);
  }

  function initPracticeControls() {
    const submitBtn = document.getElementById('btn-submit-practice');
    const resetBtn = document.getElementById('btn-reset-practice');
    const studyModeBtn = document.getElementById('btn-mode-study');
    const examModeBtn = document.getElementById('btn-mode-exam');

    if (studyModeBtn && examModeBtn) {
      studyModeBtn.addEventListener('click', () => {
        state.practice.mode = 'study';
        studyModeBtn.classList.add('active');
        examModeBtn.classList.remove('active');
        renderPracticeQuiz(window.COURSE_DATA.weeks[state.currentWeek]);
      });

      examModeBtn.addEventListener('click', () => {
        state.practice.mode = 'exam';
        examModeBtn.classList.add('active');
        studyModeBtn.classList.remove('active');
        renderPracticeQuiz(window.COURSE_DATA.weeks[state.currentWeek]);
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const weekData = window.COURSE_DATA.weeks[state.currentWeek];
        state.practice.isSubmitted = true;
        renderPracticeQuiz(weekData);
        showScoreModal('Practice Quiz Results', state.practice.score, weekData.practiceMCQs.length);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset this quiz and retake it?')) {
          state.practice.answers = {};
          state.practice.isSubmitted = false;
          state.practice.score = 0;
          renderPracticeQuiz(window.COURSE_DATA.weeks[state.currentWeek]);
        }
      });
    }
  }

  // --- 5. Assignment 1 Quiz & Solutions (10 Questions) ---
  function renderAssignmentQuiz(weekData) {
    const container = document.getElementById('assignment-questions-list');
    if (!container || !weekData.assignmentMCQs) return;

    const questions = weekData.assignmentMCQs;
    const answeredCount = Object.keys(state.assignment.answers).length;
    const badge = document.getElementById('assignment-score-badge');
    if (badge) {
      badge.textContent = state.assignment.isSubmitted 
        ? `Score: ${state.assignment.score} / ${questions.length} (${Math.round((state.assignment.score / questions.length) * 100)}%)`
        : `Answered: ${answeredCount} / ${questions.length}`;
    }

    container.innerHTML = questions.map((q, idx) => {
      const selected = state.assignment.answers[q.id];
      const isAnswered = selected !== undefined;
      const showFeedback = state.assignment.mode === 'study' ? isAnswered : state.assignment.isSubmitted;

      return `
        <div class="question-card" id="assignment-q-${q.id}">
          <div class="question-meta">
            <span class="q-number">Assignment 1 • Question ${idx + 1}</span>
            <span class="q-status-badge ${isAnswered ? 'chip-status ready' : 'chip-status locked'}">
              ${isAnswered ? 'Done' : 'Pending'}
            </span>
          </div>
          <h3 class="q-title">${q.question}</h3>
          <div class="options-list">
            ${q.options.map((opt, optIdx) => {
              const letter = String.fromCharCode(97 + optIdx); // a, b, c, d
              let optionClass = 'option-btn';
              if (selected === optIdx) optionClass += ' selected';
              if (showFeedback) {
                if (optIdx === q.correct) optionClass += ' correct';
                else if (selected === optIdx) optionClass += ' incorrect';
              }
              return `
                <button class="${optionClass}" data-qid="${q.id}" data-opt="${optIdx}" ${showFeedback && state.assignment.mode === 'study' ? 'disabled' : ''}>
                  <span class="option-letter">(${letter})</span>
                  <span>${opt}</span>
                </button>
              `;
            }).join('')}
          </div>
          ${showFeedback ? `
            <div class="explanation-box">
              <div class="explanation-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                Correct Official Answer: (${q.letter}) • Verified Solution:
              </div>
              <div class="explanation-text">${q.explanation}</div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = parseInt(btn.dataset.qid, 10);
        const opt = parseInt(btn.dataset.opt, 10);
        state.assignment.answers[qid] = opt;

        let correctCount = 0;
        weekData.assignmentMCQs.forEach(q => {
          if (state.assignment.answers[q.id] === q.correct) correctCount++;
        });
        state.assignment.score = correctCount;
        saveProgress();
        renderAssignmentQuiz(weekData);
      });
    });
  }

  function initAssignmentControls() {
    const submitBtn = document.getElementById('btn-submit-assignment');
    const resetBtn = document.getElementById('btn-reset-assignment');
    const studyModeBtn = document.getElementById('btn-assignment-mode-study');
    const examModeBtn = document.getElementById('btn-assignment-mode-exam');

    if (studyModeBtn && examModeBtn) {
      studyModeBtn.addEventListener('click', () => {
        state.assignment.mode = 'study';
        studyModeBtn.classList.add('active');
        examModeBtn.classList.remove('active');
        renderAssignmentQuiz(window.COURSE_DATA.weeks[state.currentWeek]);
      });

      examModeBtn.addEventListener('click', () => {
        state.assignment.mode = 'exam';
        examModeBtn.classList.add('active');
        studyModeBtn.classList.remove('active');
        renderAssignmentQuiz(window.COURSE_DATA.weeks[state.currentWeek]);
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const weekData = window.COURSE_DATA.weeks[state.currentWeek];
        state.assignment.isSubmitted = true;
        renderAssignmentQuiz(weekData);
        showScoreModal('Assignment 1 Official Score', state.assignment.score, weekData.assignmentMCQs.length);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset assignment practice?')) {
          state.assignment.answers = {};
          state.assignment.isSubmitted = false;
          state.assignment.score = 0;
          renderAssignmentQuiz(window.COURSE_DATA.weeks[state.currentWeek]);
        }
      });
    }
  }

  // --- Score Results Modal ---
  function showScoreModal(title, score, total) {
    const modal = document.getElementById('score-modal');
    const titleEl = document.getElementById('score-modal-title');
    const bodyEl = document.getElementById('score-modal-body');
    const percentage = Math.round((score / total) * 100);

    let badgeText = 'Participation';
    let icon = '📚';
    if (percentage >= 90) {
      badgeText = '🏆 NPTEL Elite + Gold (90%+)';
      icon = '🥇';
    } else if (percentage >= 75) {
      badgeText = '🥈 NPTEL Elite + Silver (75% - 89%)';
      icon = '🥈';
    } else if (percentage >= 60) {
      badgeText = '🥉 NPTEL Elite (60% - 74%)';
      icon = '🥉';
    } else if (percentage >= 40) {
      badgeText = '✅ Passing Certificate (40% - 59%)';
      icon = '📜';
    } else {
      badgeText = '⚠️ Needs Revision (< 40%)';
      icon = '🔄';
    }

    if (titleEl) titleEl.textContent = title;
    if (bodyEl) {
      bodyEl.innerHTML = `
        <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">${icon}</div>
        <h3 style="font-size: 1.8rem; font-weight: 800; color: var(--primary-light); margin-bottom: 0.25rem;">
          ${score} / ${total} (${percentage}%)
        </h3>
        <p style="font-weight: 700; color: var(--text-main); font-size: 1.05rem; margin-bottom: 1rem;">
          ${badgeText}
        </p>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">
          ${percentage >= 75 
            ? 'Outstanding performance! You have grasped the ecological hierarchies, pillars, and tricky traps thoroughly.' 
            : 'Good effort! Review the explanations marked in green and red to lock down your high-yield memory before the exam.'}
        </p>
      `;
    }

    if (modal) modal.classList.add('open');
  }

  // --- 6. Progress Dashboard ---
  function updateProgressDashboard() {
    const weekData = window.COURSE_DATA.weeks[state.currentWeek];
    if (!weekData) return;

    // Flashcard Progress
    const totalCards = weekData.flashcards ? weekData.flashcards.length : 16;
    const masteredCount = state.masteredCards.size;
    const flashcardPct = Math.min(100, Math.round((masteredCount / totalCards) * 100));

    // Practice Quiz Progress
    const totalPractice = weekData.practiceMCQs ? weekData.practiceMCQs.length : 20;
    const practiceScore = state.practice.score;
    const practicePct = Math.round((practiceScore / totalPractice) * 100);

    // Assignment Progress
    const totalAssignment = weekData.assignmentMCQs ? weekData.assignmentMCQs.length : 10;
    const assignmentScore = state.assignment.score;
    const assignmentPct = Math.round((assignmentScore / totalAssignment) * 100);

    // Update Circle Meters
    updateSvgCircle('circle-flashcards', flashcardPct);
    updateSvgCircle('circle-practice', practicePct);
    updateSvgCircle('circle-assignment', assignmentPct);

    // Update Text Values
    const fcText = document.getElementById('text-progress-flashcards');
    if (fcText) fcText.textContent = `${flashcardPct}%`;

    const prText = document.getElementById('text-progress-practice');
    if (prText) prText.textContent = `${practiceScore}/${totalPractice}`;

    const asText = document.getElementById('text-progress-assignment');
    if (asText) asText.textContent = `${assignmentScore}/${totalAssignment}`;
  }

  function updateSvgCircle(id, percentage) {
    const el = document.getElementById(id);
    if (!el) return;
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    el.style.strokeDasharray = `${circumference} ${circumference}`;
    el.style.strokeDashoffset = offset;
  }

  function initProgressControls() {
    const resetAllBtn = document.getElementById('btn-reset-all-progress');
    if (resetAllBtn) {
      resetAllBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all your study progress, quiz scores, and flashcard mastery?')) {
          localStorage.removeItem(STORAGE_KEY_PROGRESS);
          state.masteredCards.clear();
          state.practice.score = 0;
          state.practice.answers = {};
          state.practice.isSubmitted = false;
          state.assignment.score = 0;
          state.assignment.answers = {};
          state.assignment.isSubmitted = false;
          updateProgressDashboard();
          alert('All progress has been reset.');
        }
      });
    }
  }

  // --- Global Listeners & Modals ---
  function initModals() {
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', closeModal);
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  function initPrintAndScroll() {
    const printBtn = document.getElementById('btn-print-guide');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    const scrollTopBtn = document.getElementById('btn-scroll-top');
    if (scrollTopBtn) {
      window.addEventListener('scroll', () => {
        scrollTopBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
      });
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // --- App Initialization ---
  function init() {
    loadSavedProgress();
    initTheme();
    initWeekSelector();
    initTabs();
    initGlossaryControls();
    initFlashcardControls();
    initPracticeControls();
    initAssignmentControls();
    initProgressControls();
    initModals();
    initPrintAndScroll();

    // Default view
    selectWeek(1);
    updateProgressDashboard();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
