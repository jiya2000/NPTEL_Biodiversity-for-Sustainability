/**
 * Biodiversity for Sustainability
 * Clean, Simple, Single-Page App Logic
 * Strictly handles:
 * 1. Top-Level Modes:
 *    - "Week-by-Week Portal" (Week selector + strictly 3 tabs: Study Notes, Assignment MCQs, Extra MCQs)
 *    - "All-Weeks Quiz" (Completely separate mock exam across all weeks with/without shuffle)
 *    - "Extra Questions Practice" (Dedicated practice section with week-wise & shuffle options)
 * 2. Complete coverage: Weeks 0 through 12
 *    (For Week 0: strictly Assignment 0 MCQs only)
 * 3. Interactive Quiz Feedback & Answer Reveals
 */

(function () {
  'use strict';

  // Application State
  const state = {
    currentMode: 'weekwise', // 'weekwise' | 'all-quizzes' | 'all-extra'
    currentWeek: 12,
    currentTab: 'study',     // 'study' | 'assignment' | 'extra'
    shuffle: {
      assignment: false,
      extra: false,
      allQuizzes: false,
      allExtra: false
    },
    shuffledOrder: {
      assignment: null,
      extra: null,
      allQuizzes: null,
      allExtra: null
    },
    answersShown: {
      assignment: false,
      extra: false,
      allQuizzes: false,
      allExtra: false,
      laws: false
    },
    filterWeek: {
      allQuizzes: 'all', // 'all' (all 130 Qs including Week 0) | 'weeks1-12' (120 Qs) | weekNum
      allExtra: 'all'    // 'all' (240 Qs) | weekNum
    },
    userChoices: {
      assignment: {}, // { [weekNum]: { [qId]: optionIndex } }
      extra: {},      // { [weekNum]: { [qId]: optionIndex } }
      laws: {}        // { [qId]: optionIndex }
    }
  };

  // --- Helper: DOM Slug for view types ---
  function getDomSlug(viewType) {
    if (viewType === 'assignment') return 'assignment';
    if (viewType === 'extra') return 'extra';
    if (viewType === 'allQuizzes') return 'all-quizzes';
    if (viewType === 'allExtra') return 'all-extra';
    return viewType;
  }

  // --- Helper: Get available week numbers from data ---
  function getWeekList() {
    if (!window.COURSE_DATA || !window.COURSE_DATA.weeks) return [];
    return Object.keys(window.COURSE_DATA.weeks).map(Number).sort((a, b) => a - b);
  }

  // --- Helper: Fisher-Yates array shuffle ---
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // --- Theme Management ---
  function initTheme() {
    const savedTheme = localStorage.getItem('app_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.textContent = savedTheme === 'dark' ? 'Light Theme' : 'Dark Theme';
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('app_theme', next);
        themeBtn.textContent = next === 'dark' ? 'Light Theme' : 'Dark Theme';
      });
    }
  }

  // --- Mode Navigation (Separates All-Weeks Quiz from Week-wise Portal) ---
  function initModeNavigation() {
    const modeBtns = document.querySelectorAll('.mode-btn');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        switchMode(mode);
      });
    });
  }

  function switchMode(modeName) {
    state.currentMode = modeName;

    // Update active mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === modeName);
    });

    const weekBarContainer = document.getElementById('week-bar-container');
    const tabBarContainer = document.getElementById('tab-bar-container');

    // Hide all view panels first
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    if (modeName === 'weekwise') {
      // Show week bar and tab bar
      if (weekBarContainer) weekBarContainer.style.display = '';
      if (tabBarContainer) tabBarContainer.style.display = '';

      // Activate current tab panel
      const targetPanel = document.getElementById(`view-${state.currentTab}`);
      if (targetPanel) targetPanel.classList.add('active');

      const weekData = window.COURSE_DATA.weeks[state.currentWeek];
      if (weekData) {
        updateBannerTitle(weekData.title, weekData.subtitle);
        if (state.currentTab === 'study') {
          renderStudyNotes(weekData);
        } else {
          renderQuiz(state.currentTab);
        }
      }
    } else if (modeName === 'all-quizzes') {
      // Hide week-specific bars entirely
      if (weekBarContainer) weekBarContainer.style.display = 'none';
      if (tabBarContainer) tabBarContainer.style.display = 'none';

      const panel = document.getElementById('view-all-quizzes');
      if (panel) panel.classList.add('active');

      updateBannerTitle(
        'All-Weeks Assignment Quiz',
        '130 Official Assignment Questions across all weeks (Weeks 0 to 12) • With or Without Shuffle'
      );
      renderQuiz('allQuizzes');
    } else if (modeName === 'all-extra') {
      // Hide week-specific bars entirely
      if (weekBarContainer) weekBarContainer.style.display = 'none';
      if (tabBarContainer) tabBarContainer.style.display = 'none';

      const panel = document.getElementById('view-all-extra');
      if (panel) panel.classList.add('active');

      updateBannerTitle(
        'Extra Questions Practice',
        '240 Practice Exam-Style Questions with Explanations • Week-wise & Shuffle Modes'
      );
      renderQuiz('allExtra');
    } else if (modeName === 'laws-principles') {
      // Hide week-specific bars entirely
      if (weekBarContainer) weekBarContainer.style.display = 'none';
      if (tabBarContainer) tabBarContainer.style.display = 'none';

      const panel = document.getElementById('view-laws-principles');
      if (panel) panel.classList.add('active');

      updateBannerTitle(
        'Ecology, Biodiversity & Sustainability: Laws & Principles',
        'Essential ecological laws, named rules, population formulas, and sustainability principles for exam memorisation'
      );
      renderLawsQuiz();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateBannerTitle(title, subtitle) {
    const titleEl = document.getElementById('current-week-title');
    const subEl = document.getElementById('current-week-subtitle');
    if (titleEl) titleEl.textContent = title;
    if (subEl) subEl.textContent = subtitle;
  }

  // --- Week Selector (Within Week-by-Week Mode) ---
  function initWeekSelector() {
    const buttons = document.querySelectorAll('.week-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const weekNum = parseInt(btn.getAttribute('data-week'), 10);
        selectWeek(weekNum);
      });
    });
  }

  function selectWeek(weekNum) {
    if (!window.COURSE_DATA || !window.COURSE_DATA.weeks[weekNum]) return;
    state.currentWeek = weekNum;

    // Reset single-week shuffle cache
    state.shuffledOrder.assignment = null;
    state.shuffledOrder.extra = null;

    // Update buttons
    document.querySelectorAll('.week-btn').forEach(btn => {
      const w = parseInt(btn.getAttribute('data-week'), 10);
      btn.classList.toggle('active', w === weekNum);
    });

    const weekData = window.COURSE_DATA.weeks[weekNum];

    // Update counts
    const countAssign = document.getElementById('count-assignment');
    const countExtra = document.getElementById('count-extra');
    if (countAssign) countAssign.textContent = weekData.assignmentMCQs ? weekData.assignmentMCQs.length : 10;
    if (countExtra) countExtra.textContent = weekData.extraMCQs ? weekData.extraMCQs.length : 0;

    if (state.currentMode === 'weekwise') {
      updateBannerTitle(weekData.title, weekData.subtitle);

      // Week 0: only MCQs exist, no study notes or extra MCQs
      if (weekNum === 0) {
        if (state.currentTab !== 'assignment') {
          switchTab('assignment');
          return;
        }
      }

      renderStudyNotes(weekData);
      if (state.currentTab === 'assignment') {
        renderQuiz('assignment');
      } else if (state.currentTab === 'extra') {
        renderQuiz('extra');
      }
    }
  }

  // --- Week-wise Tab Navigation (Strictly 3 Tabs) ---
  function initTabs() {
    const tabBtns = document.querySelectorAll('.nav-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        switchTab(tab);
      });
    });
  }

  function switchTab(tabName) {
    state.currentTab = tabName;

    // Tab buttons
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });

    // Tab panels
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view-${tabName}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }

    const weekData = window.COURSE_DATA.weeks[state.currentWeek];
    if (weekData) {
      updateBannerTitle(weekData.title, weekData.subtitle);
      if (tabName === 'study') {
        renderStudyNotes(weekData);
      } else if (tabName === 'assignment') {
        renderQuiz('assignment');
      } else if (tabName === 'extra') {
        renderQuiz('extra');
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- 1. Render Study Notes ---
  function renderStudyNotes(weekData) {
    if (!weekData) return;

    const remindersSection = document.getElementById('reminders-section');
    const defsSection = document.getElementById('definitions-section');
    const remindersList = document.getElementById('reminders-list');
    const tbody = document.getElementById('definitions-tbody');

    // Week 0: strictly Assignment 0 MCQs only
    if (weekData.weekNumber === 0) {
      if (remindersSection) {
        remindersSection.innerHTML = `
          <h3 class="section-title">Week 0 Information</h3>
          <p style="padding: 1.25rem 1.5rem; color: var(--text-muted); background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); line-height: 1.6;">
            Week 0 contains only Assignment 0 MCQs. Please switch to the <strong>Assignment MCQs</strong> tab above to view and practice the questions.
          </p>
        `;
      }
      if (defsSection) defsSection.style.display = 'none';
      return;
    }

    // Normal weeks: restore reminders and definitions layout
    if (remindersSection) {
      remindersSection.innerHTML = `
        <h3 class="section-title">High-Yield Reminders</h3>
        <ul class="reminders-list" id="reminders-list">
          ${(weekData.reminders || []).map(point => `<li>${point}</li>`).join('')}
        </ul>
      `;
    }
    if (defsSection) {
      defsSection.style.display = '';
      if (tbody && weekData.definitions) {
        tbody.innerHTML = weekData.definitions.map(d => `
          <tr>
            <td class="term-col"><strong>${d.term}</strong></td>
            <td class="def-col">${d.definition}</td>
          </tr>
        `).join('');
      }
    }

    // Traps (Week 1 only or when available)
    const trapsSection = document.getElementById('traps-section');
    const trapsList = document.getElementById('traps-list');
    if (trapsSection && trapsList) {
      if (weekData.traps && weekData.traps.length > 0) {
        trapsSection.style.display = 'block';
        trapsList.innerHTML = weekData.traps.map(t => `
          <div class="trap-card">
            <span class="trap-term">${t.concept}</span>
            <span class="trap-rule">${t.rule}</span>
          </div>
        `).join('');
      } else {
        trapsSection.style.display = 'none';
        trapsList.innerHTML = '';
      }
    }
  }

  // --- Question Gathering Helpers ---
  function getBaseQuestions(viewType) {
    if (viewType === 'assignment') {
      const weekData = window.COURSE_DATA.weeks[state.currentWeek];
      if (!weekData || !weekData.assignmentMCQs) return [];
      return weekData.assignmentMCQs.map((q, idx) => ({
        ...q,
        weekNum: state.currentWeek,
        originalIndex: idx
      }));
    }

    if (viewType === 'extra') {
      const weekData = window.COURSE_DATA.weeks[state.currentWeek];
      if (!weekData || !weekData.extraMCQs) return [];
      return weekData.extraMCQs.map((q, idx) => ({
        ...q,
        weekNum: state.currentWeek,
        originalIndex: idx
      }));
    }

    if (viewType === 'allQuizzes') {
      const weeks = getWeekList();
      let targetWeeks;

      if (state.filterWeek.allQuizzes === 'all') {
        // All weeks including Week 0: Total 130 questions
        targetWeeks = weeks;
      } else if (state.filterWeek.allQuizzes === 'weeks1-12') {
        // Weeks 1 to 12 only: 120 questions
        targetWeeks = weeks.filter(w => w !== 0);
      } else {
        targetWeeks = [parseInt(state.filterWeek.allQuizzes, 10)];
      }

      const list = [];
      targetWeeks.forEach(w => {
        const weekData = window.COURSE_DATA.weeks[w];
        if (weekData && weekData.assignmentMCQs) {
          weekData.assignmentMCQs.forEach((q, idx) => {
            list.push({
              ...q,
              weekNum: w,
              originalIndex: idx
            });
          });
        }
      });
      return list;
    }

    if (viewType === 'allExtra') {
      const weeks = getWeekList();
      const targetWeeks = state.filterWeek.allExtra === 'all'
        ? weeks.filter(w => w !== 0) // Week 0 has no extra MCQs
        : [parseInt(state.filterWeek.allExtra, 10)];

      const list = [];
      targetWeeks.forEach(w => {
        const weekData = window.COURSE_DATA.weeks[w];
        if (weekData && weekData.extraMCQs) {
          weekData.extraMCQs.forEach((q, idx) => {
            list.push({
              ...q,
              weekNum: w,
              originalIndex: idx
            });
          });
        }
      });
      return list;
    }

    return [];
  }

  function getQuestionsForView(viewType) {
    const base = getBaseQuestions(viewType);
    if (state.shuffle[viewType]) {
      if (!state.shuffledOrder[viewType] || state.shuffledOrder[viewType].length !== base.length) {
        state.shuffledOrder[viewType] = shuffleArray(base);
      }
      return state.shuffledOrder[viewType];
    }
    return base;
  }

  // --- Shuffle Management ---
  function toggleShuffle(viewType) {
    state.shuffle[viewType] = !state.shuffle[viewType];
    if (state.shuffle[viewType]) {
      const base = getBaseQuestions(viewType);
      state.shuffledOrder[viewType] = shuffleArray(base);
    } else {
      state.shuffledOrder[viewType] = null;
    }
    updateShuffleUI(viewType);
    renderQuiz(viewType);
  }

  function reshuffle(viewType) {
    const base = getBaseQuestions(viewType);
    state.shuffledOrder[viewType] = shuffleArray(base);
    renderQuiz(viewType);
  }

  function updateShuffleUI(viewType) {
    const slug = getDomSlug(viewType);
    const btnShuffle = document.getElementById(`btn-shuffle-${slug}`);
    const btnReshuffle = document.getElementById(`btn-reshuffle-${slug}`);

    if (btnShuffle) {
      if (state.shuffle[viewType]) {
        btnShuffle.textContent = 'Shuffle: ON';
        btnShuffle.classList.add('active-shuffle');
      } else {
        btnShuffle.textContent = 'Shuffle: OFF';
        btnShuffle.classList.remove('active-shuffle');
      }
    }

    if (btnReshuffle) {
      btnReshuffle.style.display = state.shuffle[viewType] ? 'inline-flex' : 'none';
    }
  }

  // --- In-Panel Filter (Week-wise) for All-Quizzes & All-Extra ---
  function setFilterWeek(viewType, filterVal) {
    state.filterWeek[viewType] = filterVal.toString();

    const slug = getDomSlug(viewType);
    const filterContainer = document.getElementById(`${slug}-filters`);
    if (filterContainer) {
      filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-filter') === filterVal.toString());
      });
    }

    if (state.shuffle[viewType]) {
      const base = getBaseQuestions(viewType);
      state.shuffledOrder[viewType] = shuffleArray(base);
    } else {
      state.shuffledOrder[viewType] = null;
    }

    renderQuiz(viewType);
  }

  function initFilters(viewType) {
    const slug = getDomSlug(viewType);
    const filterContainer = document.getElementById(`${slug}-filters`);
    if (!filterContainer) return;

    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filterVal = btn.getAttribute('data-filter');
        setFilterWeek(viewType, filterVal);
      });
    });
  }

  // --- Unified Quiz Renderer ---
  function renderQuiz(viewType) {
    const slug = getDomSlug(viewType);
    const container = document.getElementById(`${slug}-questions-container`);
    if (!container) return;

    const questions = getQuestionsForView(viewType);
    const showAll = state.answersShown[viewType];
    const isAssignmentType = (viewType === 'assignment' || viewType === 'allQuizzes');
    const storeKey = isAssignmentType ? 'assignment' : 'extra';

    // Handle empty state (e.g., Week 0 on extra practice)
    if (!questions || questions.length === 0) {
      container.innerHTML = `
        <div style="padding: 2.5rem 1.5rem; text-align: center; color: var(--text-muted); background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <p>No extra practice questions for Week 0. Please select the <strong>Assignment MCQs</strong> tab to practice Assignment 0.</p>
        </div>
      `;
      updateQuizHeader(viewType, []);
      return;
    }

    container.innerHTML = questions.map((q, qIdx) => {
      const userChoice = (state.userChoices[storeKey][q.weekNum] &&
        typeof state.userChoices[storeKey][q.weekNum][q.id] === 'number')
        ? state.userChoices[storeKey][q.weekNum][q.id]
        : null;

      const isAnswered = typeof userChoice === 'number';
      const isCorrect = userChoice === q.answer;

      // Question header badge
      let questionTitle = '';
      if (viewType === 'allQuizzes') {
        questionTitle = `<span class="week-tag">Week ${q.weekNum}</span> Question ${qIdx + 1} of ${questions.length}`;
      } else if (viewType === 'allExtra') {
        questionTitle = `<span class="week-tag">Week ${q.weekNum}</span> Practice Question ${qIdx + 1} of ${questions.length}`;
      } else if (viewType === 'assignment') {
        questionTitle = `Question ${qIdx + 1} of ${questions.length}`;
      } else if (viewType === 'extra') {
        questionTitle = `Practice Question ${qIdx + 1} of ${questions.length}`;
      }

      return `
        <div class="mcq-card" id="${slug}-q-${q.weekNum}-${q.id}">
          <div class="mcq-header">
            <span class="mcq-num">${questionTitle}</span>
            ${isAnswered ? `
              <span class="status-tag ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? 'Correct' : 'Incorrect'}
              </span>
            ` : ''}
          </div>
          <div class="mcq-question">${q.question}</div>
          <div class="mcq-options">
            ${q.options.map((opt, optIdx) => {
              const letter = String.fromCharCode(65 + optIdx);
              let optionClass = 'mcq-opt';

              if (showAll) {
                if (optIdx === q.answer) optionClass += ' is-correct';
              } else if (isAnswered) {
                if (optIdx === q.answer) {
                  optionClass += ' is-correct';
                } else if (optIdx === userChoice) {
                  optionClass += ' is-wrong';
                }
              }

              return `
                <button class="${optionClass}" 
                  data-view="${viewType}" 
                  data-week="${q.weekNum}" 
                  data-q="${q.id}" 
                  data-opt="${optIdx}" 
                  ${showAll ? 'disabled' : ''}>
                  <span class="opt-letter">${letter}.</span>
                  <span class="opt-text">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>

          ${(showAll || isAnswered) ? `
            <div class="mcq-solution">
              <strong>Correct Answer: (${q.letter ? q.letter.toUpperCase() : String.fromCharCode(65 + q.answer)})</strong>
              <p>${q.explanation || q.options[q.answer]}</p>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Attach click handlers to options
    container.querySelectorAll('.mcq-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const weekNum = parseInt(btn.getAttribute('data-week'), 10);
        const qId = parseInt(btn.getAttribute('data-q'), 10);
        const optIdx = parseInt(btn.getAttribute('data-opt'), 10);

        if (!state.userChoices[storeKey][weekNum]) {
          state.userChoices[storeKey][weekNum] = {};
        }
        state.userChoices[storeKey][weekNum][qId] = optIdx;

        renderQuiz(viewType);
      });
    });

    updateQuizHeader(viewType, questions);
    updateShuffleUI(viewType);
  }

  // --- Quiz Header & Score Display ---
  function updateQuizHeader(viewType, questions) {
    const slug = getDomSlug(viewType);
    const isAssignmentType = (viewType === 'assignment' || viewType === 'allQuizzes');
    const storeKey = isAssignmentType ? 'assignment' : 'extra';
    const store = state.userChoices[storeKey];

    let answeredCount = 0;
    let correctCount = 0;

    questions.forEach(q => {
      if (store[q.weekNum] && typeof store[q.weekNum][q.id] === 'number') {
        answeredCount++;
        if (store[q.weekNum][q.id] === q.answer) {
          correctCount++;
        }
      }
    });

    const displayEl = document.getElementById(`${slug}-score-display`);
    if (!displayEl) return;

    if (questions.length === 0) {
      displayEl.textContent = '0 Questions Available';
      return;
    }

    if (answeredCount === 0) {
      if (viewType === 'assignment') {
        displayEl.textContent = `${questions.length} Questions from Official Assignment`;
      } else if (viewType === 'extra') {
        displayEl.textContent = `${questions.length} Practice Exam-Style Questions with Explanations`;
      } else if (viewType === 'allQuizzes') {
        const filter = state.filterWeek.allQuizzes;
        if (filter === 'all') {
          displayEl.textContent = `130 Questions from All Official Assignments (Weeks 0 to 12)`;
        } else if (filter === 'weeks1-12') {
          displayEl.textContent = `120 Questions from Weeks 1 to 12 Official Assignments`;
        } else {
          displayEl.textContent = `Week ${filter}: ${questions.length} Official Assignment Questions`;
        }
      } else if (viewType === 'allExtra') {
        const filter = state.filterWeek.allExtra;
        displayEl.textContent = filter === 'all'
          ? `240 Practice Exam-Style Questions with Explanations`
          : `Week ${filter}: ${questions.length} Practice Questions with Explanations`;
      }
    } else {
      const pct = Math.round((correctCount / answeredCount) * 100);
      displayEl.textContent = `Completed ${answeredCount} of ${questions.length} • Score: ${correctCount}/${answeredCount} (${pct}%)`;
    }
  }

  // --- Quiz Action Buttons Setup ---
  function initQuizButtons(viewType) {
    const slug = getDomSlug(viewType);

    // Shuffle Toggle
    const btnShuffle = document.getElementById(`btn-shuffle-${slug}`);
    if (btnShuffle) {
      btnShuffle.addEventListener('click', () => toggleShuffle(viewType));
    }

    // Reshuffle
    const btnReshuffle = document.getElementById(`btn-reshuffle-${slug}`);
    if (btnReshuffle) {
      btnReshuffle.addEventListener('click', () => reshuffle(viewType));
    }

    // Toggle Show/Hide Answers
    const btnToggle = document.getElementById(`btn-toggle-${slug}-answers`);
    if (btnToggle) {
      btnToggle.addEventListener('click', () => {
        state.answersShown[viewType] = !state.answersShown[viewType];
        btnToggle.textContent = state.answersShown[viewType] ? 'Hide Answers' : 'Show All Answers';
        renderQuiz(viewType);
      });
    }

    // Reset Quiz
    const btnReset = document.getElementById(`btn-reset-${slug}`);
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        const isAssignmentType = (viewType === 'assignment' || viewType === 'allQuizzes');
        const storeKey = isAssignmentType ? 'assignment' : 'extra';

        if (viewType === 'assignment' || viewType === 'extra') {
          state.userChoices[storeKey][state.currentWeek] = {};
        } else if (viewType === 'allQuizzes') {
          const filter = state.filterWeek.allQuizzes;
          if (filter === 'all' || filter === 'weeks1-12') {
            state.userChoices.assignment = {};
          } else {
            state.userChoices.assignment[filter] = {};
          }
        } else if (viewType === 'allExtra') {
          const filter = state.filterWeek.allExtra;
          if (filter === 'all') {
            state.userChoices.extra = {};
          } else {
            state.userChoices.extra[filter] = {};
          }
        }

        state.answersShown[viewType] = false;
        if (btnToggle) btnToggle.textContent = 'Show All Answers';
        renderQuiz(viewType);
      });
    }
  }

  // --- Laws & Principles Section Management ---
  let matchKeyRevealed = false;

  function initLawsSection() {
    // 1. Scientist Match Key Toggle
    const btnMatchKey = document.getElementById('btn-toggle-match-key');
    if (btnMatchKey) {
      btnMatchKey.addEventListener('click', () => {
        matchKeyRevealed = !matchKeyRevealed;
        btnMatchKey.textContent = matchKeyRevealed ? 'Hide Answer Key' : 'Reveal Answer Key';
        
        document.querySelectorAll('.match-answer-hidden').forEach(el => {
          el.style.display = matchKeyRevealed ? 'none' : 'inline-block';
        });
        document.querySelectorAll('.match-answer-revealed').forEach(el => {
          el.style.display = matchKeyRevealed ? 'inline-block' : 'none';
        });
      });
    }

    // 2. Laws Quick Check Quiz Controls
    const btnToggleAnswers = document.getElementById('btn-toggle-laws-answers');
    if (btnToggleAnswers) {
      btnToggleAnswers.addEventListener('click', () => {
        state.answersShown.laws = !state.answersShown.laws;
        btnToggleAnswers.textContent = state.answersShown.laws ? 'Hide All Answers' : 'Show All Answers';
        renderLawsQuiz();
      });
    }

    const btnResetLaws = document.getElementById('btn-reset-laws');
    if (btnResetLaws) {
      btnResetLaws.addEventListener('click', () => {
        state.userChoices.laws = {};
        state.answersShown.laws = false;
        if (btnToggleAnswers) btnToggleAnswers.textContent = 'Show All Answers';
        renderLawsQuiz();
      });
    }

    // 3. Quick-jump smooth scroll
    document.querySelectorAll('.quick-jump-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const href = btn.getAttribute('href');
        if (href && href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  function renderLawsQuiz() {
    const container = document.getElementById('laws-questions-container');
    if (!container) return;

    const questions = (window.COURSE_DATA && window.COURSE_DATA.lawsQuiz) ? window.COURSE_DATA.lawsQuiz : [];
    const showAll = state.answersShown.laws;
    const store = state.userChoices.laws;

    let answeredCount = 0;
    let correctCount = 0;

    questions.forEach(q => {
      if (typeof store[q.id] === 'number') {
        answeredCount++;
        if (store[q.id] === q.answer) {
          correctCount++;
        }
      }
    });

    const displayEl = document.getElementById('laws-score-display');
    if (displayEl) {
      if (answeredCount === 0) {
        displayEl.textContent = `${questions.length} Quick Check Practice Questions`;
      } else {
        const pct = Math.round((correctCount / questions.length) * 100);
        displayEl.textContent = `Score: ${correctCount}/${questions.length} (${pct}%) • ${answeredCount} of ${questions.length} Answered`;
      }
    }

    container.innerHTML = questions.map((q, qIdx) => {
      const userChoice = typeof store[q.id] === 'number' ? store[q.id] : null;
      const isAnswered = typeof userChoice === 'number';
      const isCorrect = userChoice === q.answer;

      return `
        <div class="mcq-card" id="laws-q-${q.id}">
          <div class="mcq-header">
            <span class="mcq-num">Quick Check Question ${qIdx + 1} of ${questions.length}</span>
            ${isAnswered ? `
              <span class="status-tag ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? 'Correct' : 'Incorrect'}
              </span>
            ` : ''}
          </div>
          <div class="mcq-question">${q.question}</div>
          <div class="mcq-options">
            ${q.options.map((opt, optIdx) => {
              const letter = String.fromCharCode(65 + optIdx);
              let optionClass = 'mcq-opt';

              if (showAll) {
                if (optIdx === q.answer) optionClass += ' is-correct';
              } else if (isAnswered) {
                if (optIdx === q.answer) {
                  optionClass += ' is-correct';
                } else if (optIdx === userChoice) {
                  optionClass += ' is-wrong';
                }
              }

              return `
                <button class="${optionClass}" 
                  data-q="${q.id}" 
                  data-opt="${optIdx}" 
                  type="button" 
                  aria-label="Option ${letter}: ${opt}">
                  <span class="opt-letter">${letter}.</span>
                  <span class="opt-text">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>
          ${(showAll || isAnswered) ? `
            <div class="mcq-solution">
              <strong>Correct Answer: (${q.letter ? q.letter.toUpperCase() : String.fromCharCode(65 + q.answer)})</strong>
              <p>${q.explanation || q.options[q.answer]}</p>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Attach click listeners to option buttons
    container.querySelectorAll('.mcq-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const qId = parseInt(btn.getAttribute('data-q'), 10);
        const optIdx = parseInt(btn.getAttribute('data-opt'), 10);
        state.userChoices.laws[qId] = optIdx;
        renderLawsQuiz();
      });
    });
  }

  // --- App Initialization ---
  function init() {
    initTheme();
    initModeNavigation();
    initWeekSelector();
    initTabs();

    // Initialize all 4 quiz views
    ['assignment', 'extra', 'allQuizzes', 'allExtra'].forEach(viewType => {
      initQuizButtons(viewType);
    });

    // Initialize in-panel week filters for All Weeks Quiz and Extra Questions Practice
    initFilters('allQuizzes');
    initFilters('allExtra');

    // Initialize Laws and Principles Section
    initLawsSection();

    // Default to Week 12 as latest in weekwise mode
    selectWeek(12);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
