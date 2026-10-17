/**
 * Biodiversity for Sustainability
 * Clean, Simple, Single-Page App Logic
 * Strictly handles:
 * 1. Week Switching (Week 1, Week 2, Week 3)
 * 2. Three Focused Tabs: Study Notes, Assignment MCQs, Extra Practice MCQs
 * 3. Interactive Quiz Feedback & Answer Reveals
 */

(function () {
  'use strict';

  // Application State
  const state = {
    currentWeek: 10,
    currentTab: 'study',
    assignmentAnswersShown: false,
    extraAnswersShown: false,
    userChoices: {
      assignment: {}, // { [week]: { [qId]: optionIndex } }
      extra: {}       // { [week]: { [qId]: optionIndex } }
    }
  };

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

  // --- Week Switching ---
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

    // Update buttons
    document.querySelectorAll('.week-btn').forEach(btn => {
      const w = parseInt(btn.getAttribute('data-week'), 10);
      btn.classList.toggle('active', w === weekNum);
    });

    const weekData = window.COURSE_DATA.weeks[weekNum];

    // Update banner
    const titleEl = document.getElementById('current-week-title');
    const subEl = document.getElementById('current-week-subtitle');
    if (titleEl) titleEl.textContent = weekData.title;
    if (subEl) subEl.textContent = weekData.subtitle;

    // Update counts
    const countAssign = document.getElementById('count-assignment');
    const countExtra = document.getElementById('count-extra');
    if (countAssign) countAssign.textContent = weekData.assignmentMCQs ? weekData.assignmentMCQs.length : 10;
    if (countExtra) countExtra.textContent = weekData.extraMCQs ? weekData.extraMCQs.length : 20;

    // Render active week data
    renderStudyNotes(weekData);
    renderAssignmentMCQs(weekData);
    renderExtraMCQs(weekData);
  }

  // --- Tab Navigation ---
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

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- 1. Render Study Notes ---
  function renderStudyNotes(weekData) {
    // High Yield Reminders
    const remindersList = document.getElementById('reminders-list');
    if (remindersList && weekData.reminders) {
      remindersList.innerHTML = weekData.reminders.map(point => `<li>${point}</li>`).join('');
    }

    // Definitions Table
    const tbody = document.getElementById('definitions-tbody');
    if (tbody && weekData.definitions) {
      tbody.innerHTML = weekData.definitions.map(d => `
        <tr>
          <td class="term-col"><strong>${d.term}</strong></td>
          <td class="def-col">${d.definition}</td>
        </tr>
      `).join('');
    }

    // Traps (Week 1 only or if available)
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

  // --- 2. Render Assignment MCQs ---
  function renderAssignmentMCQs(weekData) {
    const container = document.getElementById('assignment-questions-container');
    if (!container || !weekData.assignmentMCQs) return;

    if (!state.userChoices.assignment[state.currentWeek]) {
      state.userChoices.assignment[state.currentWeek] = {};
    }
    const currentChoices = state.userChoices.assignment[state.currentWeek];
    const showAll = state.assignmentAnswersShown;

    container.innerHTML = weekData.assignmentMCQs.map((q, qIdx) => {
      const userChoice = currentChoices[q.id];
      const isAnswered = typeof userChoice === 'number';
      const isCorrect = userChoice === q.answer;

      return `
        <div class="mcq-card" id="assignment-q-${q.id}">
          <div class="mcq-header">
            <span class="mcq-num">Question ${qIdx + 1}</span>
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
                <button class="${optionClass}" data-q="${q.id}" data-opt="${optIdx}" ${showAll ? 'disabled' : ''}>
                  <span class="opt-letter">${letter}.</span>
                  <span class="opt-text">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>

          ${(showAll || isAnswered) ? `
            <div class="mcq-solution">
              <strong>Correct Answer: (${q.letter || String.fromCharCode(65 + q.answer)})</strong>
              <p>${q.explanation || q.options[q.answer]}</p>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Attach click handlers to options
    container.querySelectorAll('.mcq-opt').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const qId = parseInt(btn.getAttribute('data-q'), 10);
        const optIdx = parseInt(btn.getAttribute('data-opt'), 10);
        state.userChoices.assignment[state.currentWeek][qId] = optIdx;
        renderAssignmentMCQs(weekData);
        updateQuizHeader('assignment', weekData.assignmentMCQs);
      });
    });

    updateQuizHeader('assignment', weekData.assignmentMCQs);
  }

  // --- 3. Render Extra Practice MCQs ---
  function renderExtraMCQs(weekData) {
    const container = document.getElementById('extra-questions-container');
    if (!container || !weekData.extraMCQs) return;

    if (!state.userChoices.extra[state.currentWeek]) {
      state.userChoices.extra[state.currentWeek] = {};
    }
    const currentChoices = state.userChoices.extra[state.currentWeek];
    const showAll = state.extraAnswersShown;

    container.innerHTML = weekData.extraMCQs.map((q, qIdx) => {
      const userChoice = currentChoices[q.id];
      const isAnswered = typeof userChoice === 'number';
      const isCorrect = userChoice === q.answer;

      return `
        <div class="mcq-card" id="extra-q-${q.id}">
          <div class="mcq-header">
            <span class="mcq-num">Practice Question ${qIdx + 1} of ${weekData.extraMCQs.length}</span>
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
                <button class="${optionClass}" data-q="${q.id}" data-opt="${optIdx}" ${showAll ? 'disabled' : ''}>
                  <span class="opt-letter">${letter}.</span>
                  <span class="opt-text">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>

          ${(showAll || isAnswered) ? `
            <div class="mcq-solution">
              <strong>Correct Answer: Option ${q.letter || String.fromCharCode(65 + q.answer)}</strong>
              <p>${q.explanation}</p>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Attach click handlers
    container.querySelectorAll('.mcq-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const qId = parseInt(btn.getAttribute('data-q'), 10);
        const optIdx = parseInt(btn.getAttribute('data-opt'), 10);
        state.userChoices.extra[state.currentWeek][qId] = optIdx;
        renderExtraMCQs(weekData);
        updateQuizHeader('extra', weekData.extraMCQs);
      });
    });

    updateQuizHeader('extra', weekData.extraMCQs);
  }

  // --- Quiz Actions (Show Answers / Reset) ---
  function updateQuizHeader(type, questions) {
    const choices = state.userChoices[type][state.currentWeek] || {};
    const answeredCount = Object.keys(choices).length;
    let correctCount = 0;

    questions.forEach(q => {
      if (choices[q.id] === q.answer) correctCount++;
    });

    const displayEl = document.getElementById(`${type}-score-display`);
    if (displayEl) {
      if (answeredCount === 0) {
        displayEl.textContent = type === 'assignment' 
          ? `${questions.length} Questions from Official Assignment` 
          : `${questions.length} Practice Exam-Style Questions with Explanations`;
      } else {
        displayEl.textContent = `Completed ${answeredCount} of ${questions.length} • Score: ${correctCount}/${answeredCount}`;
      }
    }
  }

  function initQuizButtons() {
    // Assignment buttons
    const btnToggleAssign = document.getElementById('btn-toggle-assignment-answers');
    if (btnToggleAssign) {
      btnToggleAssign.addEventListener('click', () => {
        state.assignmentAnswersShown = !state.assignmentAnswersShown;
        btnToggleAssign.textContent = state.assignmentAnswersShown ? 'Hide Answers' : 'Show All Answers';
        const weekData = window.COURSE_DATA.weeks[state.currentWeek];
        renderAssignmentMCQs(weekData);
      });
    }

    const btnResetAssign = document.getElementById('btn-reset-assignment');
    if (btnResetAssign) {
      btnResetAssign.addEventListener('click', () => {
        state.userChoices.assignment[state.currentWeek] = {};
        state.assignmentAnswersShown = false;
        if (btnToggleAssign) btnToggleAssign.textContent = 'Show All Answers';
        const weekData = window.COURSE_DATA.weeks[state.currentWeek];
        renderAssignmentMCQs(weekData);
      });
    }

    // Extra practice buttons
    const btnToggleExtra = document.getElementById('btn-toggle-extra-answers');
    if (btnToggleExtra) {
      btnToggleExtra.addEventListener('click', () => {
        state.extraAnswersShown = !state.extraAnswersShown;
        btnToggleExtra.textContent = state.extraAnswersShown ? 'Hide Answers' : 'Show All Answers';
        const weekData = window.COURSE_DATA.weeks[state.currentWeek];
        renderExtraMCQs(weekData);
      });
    }

    const btnResetExtra = document.getElementById('btn-reset-extra');
    if (btnResetExtra) {
      btnResetExtra.addEventListener('click', () => {
        state.userChoices.extra[state.currentWeek] = {};
        state.extraAnswersShown = false;
        if (btnToggleExtra) btnToggleExtra.textContent = 'Show All Answers';
        const weekData = window.COURSE_DATA.weeks[state.currentWeek];
        renderExtraMCQs(weekData);
      });
    }
  }

  // --- App Initialization ---
  function init() {
    initTheme();
    initWeekSelector();
    initTabs();
    initQuizButtons();

    // Default to Week 10 as latest
    selectWeek(10);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
