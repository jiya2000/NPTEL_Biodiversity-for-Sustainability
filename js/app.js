/**
 * NPTEL Biodiversity for Sustainability - Application Logic
 * Clean, simple, distraction-free study and quiz engine without emojis.
 */

(function () {
  'use strict';

  // --- State Store ---
  const state = {
    currentWeek: 2,
    activeTab: 'notes',
    searchTerm: '',
    selectedCategory: 'all',
    flashcardIndex: 0,
    isCardFlipped: false,
    shuffledCards: [],
    masteredCards: new Set(),
    
    // Per-week quiz stores
    practiceByWeek: {},
    assignmentByWeek: {}
  };

  function getPracticeState(weekNum) {
    if (!state.practiceByWeek[weekNum]) {
      state.practiceByWeek[weekNum] = {
        mode: 'study',
        answers: {},
        isSubmitted: false,
        score: 0
      };
    }
    return state.practiceByWeek[weekNum];
  }

  function getAssignmentState(weekNum) {
    if (!state.assignmentByWeek[weekNum]) {
      state.assignmentByWeek[weekNum] = {
        mode: 'study',
        answers: {},
        isSubmitted: false,
        score: 0
      };
    }
    return state.assignmentByWeek[weekNum];
  }

  const STORAGE_KEY_PROGRESS = 'nptel_bio_progress_v3';
  const STORAGE_KEY_THEME = 'color-scheme';

  function loadSavedProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.masteredCards) state.masteredCards = new Set(data.masteredCards);
        if (data.practiceByWeek) state.practiceByWeek = data.practiceByWeek;
        if (data.assignmentByWeek) state.assignmentByWeek = data.assignmentByWeek;
      }
    } catch (e) {
      console.warn('Could not load saved progress', e);
    }
  }

  function saveProgress() {
    try {
      const data = {
        masteredCards: Array.from(state.masteredCards),
        practiceByWeek: state.practiceByWeek,
        assignmentByWeek: state.assignmentByWeek,
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
          <span class="chip-status ${isAvailable ? 'ready' : 'locked'}">${isAvailable ? 'Active' : 'Locked'}</span>
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
    state.shuffledCards = [];
    state.flashcardIndex = 0;
    state.isCardFlipped = false;

    document.querySelectorAll('.week-chip').forEach(c => c.classList.remove('active'));
    const activeChip = document.getElementById(`week-chip-${weekNum}`);
    if (activeChip) activeChip.classList.add('active');

    const weekData = window.COURSE_DATA.weeks[weekNum];
    if (weekData) {
      const heroTag = document.getElementById('hero-week-tag');
      const heroTitle = document.getElementById('hero-title');
      const heroSubtitle = document.getElementById('hero-subtitle');

      if (heroTag) heroTag.textContent = `Week ${weekNum} Available`;
      if (heroTitle) heroTitle.textContent = weekData.title;
      if (heroSubtitle) heroSubtitle.textContent = weekData.subtitle;

      // Stats counts
      const statDefs = document.getElementById('stat-defs-count');
      const statPractice = document.getElementById('stat-practice-count');
      const statAssignment = document.getElementById('stat-assignment-count');
      const statFlashcards = document.getElementById('stat-flashcards-count');

      if (statDefs && weekData.definitions) statDefs.textContent = weekData.definitions.length;
      if (statPractice && weekData.practiceMCQs) statPractice.textContent = weekData.practiceMCQs.length;
      if (statAssignment && weekData.assignmentMCQs) statAssignment.textContent = weekData.assignmentMCQs.length;
      if (statFlashcards && weekData.flashcards) statFlashcards.textContent = weekData.flashcards.length;

      // Tab Badges
      const tabGlossary = document.getElementById('tab-glossary');
      const tabFlashcards = document.getElementById('tab-flashcards');
      const tabPractice = document.getElementById('tab-practice');
      const tabAssignment = document.getElementById('tab-assignment');

      if (tabGlossary && weekData.definitions) {
        tabGlossary.innerHTML = `Definitions <span class="badge-pill">${weekData.definitions.length}</span>`;
      }
      if (tabFlashcards && weekData.flashcards) {
        tabFlashcards.innerHTML = `Flashcards <span class="badge-pill">${weekData.flashcards.length}</span>`;
      }
      if (tabPractice && weekData.practiceMCQs) {
        tabPractice.innerHTML = `Practice Quiz <span class="badge-pill">${weekData.practiceMCQs.length} Qs</span>`;
      }
      if (tabAssignment && weekData.assignmentMCQs) {
        tabAssignment.innerHTML = `Assignment ${weekNum} <span class="badge-pill">${weekData.assignmentMCQs.length} Qs</span>`;
      }

      // Headings
      const practiceHeading = document.getElementById('heading-practice-quiz');
      if (practiceHeading && weekData.practiceMCQs) {
        practiceHeading.textContent = `${weekData.practiceMCQs.length} Practice MCQs (Week ${weekNum})`;
      }

      const assignmentHeading = document.getElementById('heading-assignment-quiz');
      if (assignmentHeading) {
        assignmentHeading.textContent = `Assignment ${weekNum} Solutions (2026)`;
      }
    }

    renderActiveView();
    updateProgressDashboard();
  }

  function showUpcomingModal(weekNum, weekTitle) {
    const modal = document.getElementById('upcoming-modal');
    const modalTitle = document.getElementById('modal-week-title');
    const modalDesc = document.getElementById('modal-week-desc');
    
    if (modalTitle) modalTitle.textContent = `Week ${weekNum}: ${weekTitle}`;
    if (modalDesc) {
      modalDesc.innerHTML = `
        <strong>Material for Week ${weekNum} is queued for upload.</strong><br>
        As you receive materials for Week ${weekNum}, provide the lecture notes and assignment to add them here.
      `;
    }
    if (modal) modal.classList.add('open');
  }

  function closeModal() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  }

  function initTabs() {
    const tabs = document.querySelectorAll('.nav-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetView = tab.dataset.tab;
        switchTab(targetView);
      });
    });

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

  // --- 1. Render High-Yield Notes (Simple, Clean, Scannable) ---
  function renderNotes(weekData) {
    // Top Summary Box
    const summaryContainer = document.getElementById('summary-container');
    if (summaryContainer && weekData.keyPoints) {
      summaryContainer.innerHTML = `
        <div class="summary-card">
          <h3 class="summary-title">High-Yield Concept Reminders</h3>
          <ul class="summary-list">
            ${weekData.keyPoints.map(point => `<li>${point}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Hierarchy / Spectrum
    const hierarchyContainer = document.getElementById('hierarchy-container');
    const hierarchyHeading = document.getElementById('heading-hierarchy');
    if (hierarchyHeading) {
      hierarchyHeading.textContent = state.currentWeek === 1 
        ? "1. Ecological Hierarchy of Life" 
        : "1. Core Framework of Natural Capital & Limits";
    }

    if (hierarchyContainer && weekData.hierarchy) {
      hierarchyContainer.innerHTML = weekData.hierarchy.map(item => `
        <div class="hierarchy-step">
          <div class="hierarchy-level-badge">${item.level}</div>
          <div class="hierarchy-info">
            <h3>${item.name}</h3>
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
        <div class="glass-card">
          <h3 style="font-size: 1.1rem; margin-bottom: 0.4rem; color: var(--text-main); font-weight: 700;">${p.title}</h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${p.desc}</p>
        </div>
      `).join('');
    }

    // Services
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer && weekData.services) {
      servicesContainer.innerHTML = weekData.services.map(s => `
        <div class="glass-card">
          <div style="margin-bottom: 0.5rem;">
            <h4 style="font-size: 1.05rem; margin: 0 0 0.25rem;">${s.name}</h4>
            <span class="hierarchy-example">${s.benefit}</span>
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
          <div class="trap-header">${t.concept}</div>
          <div class="trap-warning"><strong>Common Confusion:</strong> ${t.trap}</div>
          <div class="trap-rule"><strong>Exam Rule:</strong> ${t.rule}</div>
        </div>
      `).join('');
    }
  }

  // --- 2. Render Glossary (Simple Definitions) ---
  function renderGlossary(weekData) {
    const listContainer = document.getElementById('definitions-grid');
    const countBadge = document.getElementById('glossary-count-badge');
    if (!listContainer || !weekData.definitions) return;

    let items = weekData.definitions;

    if (state.selectedCategory !== 'all') {
      items = items.filter(d => d.category.toLowerCase() === state.selectedCategory.toLowerCase());
    }

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
        <div style="grid-column: 1/-1; text-align: center; padding: 2.5rem 1rem; color: var(--text-dim);">
          <p style="font-size: 1rem; font-weight: 600;">No terms matching "${state.searchTerm}"</p>
          <p style="font-size: 0.85rem; margin-top: 0.35rem;">Try searching another keyword or selecting "All".</p>
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
        <div style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: flex-end;">
          <button class="btn-pill btn-pill-ghost btn-copy-def" data-text="${d.term}: ${d.definition}" style="padding: 0.25rem 0.65rem; font-size: 0.75rem;">
            Copy
          </button>
        </div>
      </div>
    `).join('');

    listContainer.querySelectorAll('.btn-copy-def').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.text;
        navigator.clipboard.writeText(text).then(() => {
          const original = btn.innerHTML;
          btn.innerHTML = 'Copied';
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

    if (state.flashcardIndex >= state.shuffledCards.length) {
      state.flashcardIndex = 0;
    }

    const card = state.shuffledCards[state.flashcardIndex];
    const total = state.shuffledCards.length;

    const counter = document.getElementById('flashcard-counter');
    const fill = document.getElementById('flashcard-progress-fill');
    const flashcardEl = document.getElementById('active-flashcard');
    const masteredBadge = document.getElementById('mastered-counter-badge');

    const currentWeekMastered = state.shuffledCards.filter(c => state.masteredCards.has(c.id)).length;

    if (counter) counter.textContent = `Card ${state.flashcardIndex + 1} of ${total}`;
    if (fill) fill.style.width = `${((state.flashcardIndex + 1) / total) * 100}%`;
    if (masteredBadge) masteredBadge.textContent = `${currentWeekMastered} / ${total} Mastered`;

    if (flashcardEl && card) {
      flashcardEl.classList.remove('flipped');
      state.isCardFlipped = false;

      document.getElementById('card-front-tag').textContent = card.category;
      document.getElementById('card-front-prompt').textContent = card.front;
      document.getElementById('card-front-hint').textContent = card.hint ? `Hint: ${card.hint}` : 'Click card to reveal answer';

      document.getElementById('card-back-tag').textContent = `${card.category} - Answer`;
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
      const currentCard = state.shuffledCards[state.flashcardIndex];
      if (currentCard) {
        state.masteredCards.add(currentCard.id);
        saveProgress();
        if (state.flashcardIndex < state.shuffledCards.length - 1) {
          state.flashcardIndex++;
        }
        renderFlashcards(window.COURSE_DATA.weeks[state.currentWeek]);
      }
    }

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

  // --- 4. Practice Quiz Engine ---
  function renderPracticeQuiz(weekData) {
    const container = document.getElementById('practice-questions-list');
    if (!container || !weekData.practiceMCQs) return;

    const quizState = getPracticeState(state.currentWeek);
    const questions = weekData.practiceMCQs;
    const answeredCount = Object.keys(quizState.answers).length;
    const scoreBadge = document.getElementById('practice-score-badge');

    if (scoreBadge) {
      scoreBadge.textContent = quizState.isSubmitted 
        ? `Score: ${quizState.score} / ${questions.length} (${Math.round((quizState.score / questions.length) * 100)}%)`
        : `Answered: ${answeredCount} / ${questions.length}`;
    }

    container.innerHTML = questions.map((q, idx) => {
      const selected = quizState.answers[q.id];
      const isAnswered = selected !== undefined;
      const showFeedback = quizState.mode === 'study' ? isAnswered : quizState.isSubmitted;

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
                <button class="${optionClass}" data-qid="${q.id}" data-opt="${optIdx}" ${showFeedback && quizState.mode === 'study' ? 'disabled' : ''}>
                  <span class="option-letter">${letter}</span>
                  <span>${opt}</span>
                </button>
              `;
            }).join('')}
          </div>
          ${showFeedback ? `
            <div class="explanation-box">
              <div class="explanation-title">
                Correct Answer: Option ${q.letter} - Explanation:
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
        handlePracticeAnswer(qid, opt);
      });
    });
  }

  function handlePracticeAnswer(qid, optIdx) {
    const quizState = getPracticeState(state.currentWeek);
    quizState.answers[qid] = optIdx;
    
    const weekData = window.COURSE_DATA.weeks[state.currentWeek];
    let correctCount = 0;
    weekData.practiceMCQs.forEach(q => {
      if (quizState.answers[q.id] === q.correct) correctCount++;
    });
    quizState.score = correctCount;
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
        const quizState = getPracticeState(state.currentWeek);
        quizState.mode = 'study';
        studyModeBtn.classList.add('active');
        examModeBtn.classList.remove('active');
        renderPracticeQuiz(window.COURSE_DATA.weeks[state.currentWeek]);
      });

      examModeBtn.addEventListener('click', () => {
        const quizState = getPracticeState(state.currentWeek);
        quizState.mode = 'exam';
        examModeBtn.classList.add('active');
        studyModeBtn.classList.remove('active');
        renderPracticeQuiz(window.COURSE_DATA.weeks[state.currentWeek]);
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const quizState = getPracticeState(state.currentWeek);
        const weekData = window.COURSE_DATA.weeks[state.currentWeek];
        quizState.isSubmitted = true;
        renderPracticeQuiz(weekData);
        showScoreModal(`Week ${state.currentWeek} Practice Quiz Results`, quizState.score, weekData.practiceMCQs.length);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm(`Reset practice quiz for Week ${state.currentWeek}?`)) {
          const quizState = getPracticeState(state.currentWeek);
          quizState.answers = {};
          quizState.isSubmitted = false;
          quizState.score = 0;
          renderPracticeQuiz(window.COURSE_DATA.weeks[state.currentWeek]);
          saveProgress();
        }
      });
    }
  }

  // --- 5. Assignment Quiz & Solutions ---
  function renderAssignmentQuiz(weekData) {
    const container = document.getElementById('assignment-questions-list');
    if (!container || !weekData.assignmentMCQs) return;

    const quizState = getAssignmentState(state.currentWeek);
    const questions = weekData.assignmentMCQs;
    const answeredCount = Object.keys(quizState.answers).length;
    const badge = document.getElementById('assignment-score-badge');

    if (badge) {
      badge.textContent = quizState.isSubmitted 
        ? `Score: ${quizState.score} / ${questions.length} (${Math.round((quizState.score / questions.length) * 100)}%)`
        : `Answered: ${answeredCount} / ${questions.length}`;
    }

    container.innerHTML = questions.map((q, idx) => {
      const selected = quizState.answers[q.id];
      const isAnswered = selected !== undefined;
      const showFeedback = quizState.mode === 'study' ? isAnswered : quizState.isSubmitted;

      return `
        <div class="question-card" id="assignment-q-${q.id}">
          <div class="question-meta">
            <span class="q-number">Assignment ${state.currentWeek} - Question ${idx + 1}</span>
            <span class="q-status-badge ${isAnswered ? 'chip-status ready' : 'chip-status locked'}">
              ${isAnswered ? 'Done' : 'Pending'}
            </span>
          </div>
          <h3 class="q-title">${q.question}</h3>
          <div class="options-list">
            ${q.options.map((opt, optIdx) => {
              const letter = String.fromCharCode(97 + optIdx);
              let optionClass = 'option-btn';
              if (selected === optIdx) optionClass += ' selected';
              if (showFeedback) {
                if (optIdx === q.correct) optionClass += ' correct';
                else if (selected === optIdx) optionClass += ' incorrect';
              }
              return `
                <button class="${optionClass}" data-qid="${q.id}" data-opt="${optIdx}" ${showFeedback && quizState.mode === 'study' ? 'disabled' : ''}>
                  <span class="option-letter">(${letter})</span>
                  <span>${opt}</span>
                </button>
              `;
            }).join('')}
          </div>
          ${showFeedback ? `
            <div class="explanation-box">
              <div class="explanation-title">
                Correct Answer: (${q.letter}) - Explanation:
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
        const quizState = getAssignmentState(state.currentWeek);
        quizState.answers[qid] = opt;

        let correctCount = 0;
        weekData.assignmentMCQs.forEach(q => {
          if (quizState.answers[q.id] === q.correct) correctCount++;
        });
        quizState.score = correctCount;
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
        const quizState = getAssignmentState(state.currentWeek);
        quizState.mode = 'study';
        studyModeBtn.classList.add('active');
        examModeBtn.classList.remove('active');
        renderAssignmentQuiz(window.COURSE_DATA.weeks[state.currentWeek]);
      });

      examModeBtn.addEventListener('click', () => {
        const quizState = getAssignmentState(state.currentWeek);
        quizState.mode = 'exam';
        examModeBtn.classList.add('active');
        studyModeBtn.classList.remove('active');
        renderAssignmentQuiz(window.COURSE_DATA.weeks[state.currentWeek]);
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const quizState = getAssignmentState(state.currentWeek);
        const weekData = window.COURSE_DATA.weeks[state.currentWeek];
        quizState.isSubmitted = true;
        renderAssignmentQuiz(weekData);
        showScoreModal(`Assignment ${state.currentWeek} Score`, quizState.score, weekData.assignmentMCQs.length);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm(`Reset assignment practice for Week ${state.currentWeek}?`)) {
          const quizState = getAssignmentState(state.currentWeek);
          quizState.answers = {};
          quizState.isSubmitted = false;
          quizState.score = 0;
          renderAssignmentQuiz(window.COURSE_DATA.weeks[state.currentWeek]);
          saveProgress();
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
    if (percentage >= 90) {
      badgeText = 'Score: 90%+ (Elite + Gold)';
    } else if (percentage >= 75) {
      badgeText = 'Score: 75% - 89% (Elite + Silver)';
    } else if (percentage >= 60) {
      badgeText = 'Score: 60% - 74% (Elite)';
    } else if (percentage >= 40) {
      badgeText = 'Score: 40% - 59% (Passing Certificate)';
    } else {
      badgeText = 'Score: Under 40% (Needs Revision)';
    }

    if (titleEl) titleEl.textContent = title;
    if (bodyEl) {
      bodyEl.innerHTML = `
        <h3 style="font-size: 2.2rem; font-weight: 800; color: var(--primary-light); margin-bottom: 0.25rem;">
          ${score} / ${total} (${percentage}%)
        </h3>
        <p style="font-weight: 700; color: var(--text-main); font-size: 1rem; margin-bottom: 1rem;">
          ${badgeText}
        </p>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">
          ${percentage >= 75 
            ? 'Great job! You have grasped the key concepts and traps accurately.' 
            : 'Review the explanations shown in the quiz to lock down your understanding before the final exam.'}
        </p>
      `;
    }

    if (modal) modal.classList.add('open');
  }

  // --- 6. Progress Dashboard ---
  function updateProgressDashboard() {
    const weekData = window.COURSE_DATA.weeks[state.currentWeek];
    if (!weekData) return;

    const quizPractice = getPracticeState(state.currentWeek);
    const quizAssignment = getAssignmentState(state.currentWeek);

    const totalCards = weekData.flashcards ? weekData.flashcards.length : 16;
    const currentWeekMastered = weekData.flashcards ? weekData.flashcards.filter(c => state.masteredCards.has(c.id)).length : 0;
    const flashcardPct = Math.min(100, Math.round((currentWeekMastered / totalCards) * 100));

    const totalPractice = weekData.practiceMCQs ? weekData.practiceMCQs.length : 20;
    const practiceScore = quizPractice.score;
    const practicePct = Math.round((practiceScore / totalPractice) * 100);

    const totalAssignment = weekData.assignmentMCQs ? weekData.assignmentMCQs.length : 10;
    const assignmentScore = quizAssignment.score;
    const assignmentPct = Math.round((assignmentScore / totalAssignment) * 100);

    updateSvgCircle('circle-flashcards', flashcardPct);
    updateSvgCircle('circle-practice', practicePct);
    updateSvgCircle('circle-assignment', assignmentPct);

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
        if (confirm('Reset all saved quiz scores and flashcard progress?')) {
          localStorage.removeItem(STORAGE_KEY_PROGRESS);
          state.masteredCards.clear();
          state.practiceByWeek = {};
          state.assignmentByWeek = {};
          updateProgressDashboard();
          selectWeek(state.currentWeek);
          alert('Progress has been reset.');
        }
      });
    }
  }

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

    selectWeek(2);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
