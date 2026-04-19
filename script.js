const tabButtons = document.querySelectorAll('.tab-btn');
const panels = {
  about: document.getElementById('about-panel'),
  projects: document.getElementById('projects-panel'),
};

const toolbar = document.querySelector('.toolbar');
const searchToggle = document.getElementById('search-toggle');
const searchInput = document.getElementById('search-input');
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('icon-moon');
const sunIcon = document.getElementById('icon-sun');
const projectFilterButtons = document.querySelectorAll('.project-filter-btn');
const projectCards = document.querySelectorAll('#projects-panel .project-card');
const selectedProjectTags = new Set();

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  const dark = theme === 'dark';
  moonIcon.classList.toggle('hidden', dark);
  sunIcon.classList.toggle('hidden', !dark);
}

function switchTab(tabId) {
  tabButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.tab === tabId));
  Object.entries(panels).forEach(([key, panel]) => {
    panel.classList.toggle('active', key === tabId);
  });

  searchInput.value = '';
  document.querySelectorAll('[data-search]').forEach((el) => el.classList.remove('is-hidden'));
  if (tabId === 'projects') applyProjectFilters('');
}

function filterActivePanel(keyword) {
  const activePanel = document.querySelector('.tab-panel.active');
  if (!activePanel) return;

  if (activePanel.id === 'projects-panel') {
    applyProjectFilters(keyword);
    return;
  }

  activePanel.querySelectorAll('[data-search]').forEach((el) => {
    const text = (el.dataset.search || '').toLowerCase();
    const hit = text.includes(keyword);
    el.classList.toggle('is-hidden', keyword !== '' && !hit);
  });
}

function applyProjectFilters(keyword = '') {
  projectCards.forEach((card) => {
    const searchText = (card.dataset.search || '').toLowerCase();
    const cardTags = (card.dataset.tags || '')
      .split(',')
      .map((t) => t.trim().toLowerCase())
      .filter(Boolean);

    const matchKeyword = keyword === '' || searchText.includes(keyword);
    const matchTags =
      selectedProjectTags.size === 0 ||
      Array.from(selectedProjectTags).every((tag) => cardTags.includes(tag));

    card.classList.toggle('is-hidden', !(matchKeyword && matchTags));
  });
}

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

searchToggle.addEventListener('click', () => {
  toolbar.classList.toggle('open');
  if (toolbar.classList.contains('open')) {
    searchInput.focus();
  } else {
    searchInput.value = '';
    document.querySelectorAll('[data-search]').forEach((el) => el.classList.remove('is-hidden'));
  }
});

searchInput.addEventListener('input', () => {
  filterActivePanel(searchInput.value.trim().toLowerCase());
});

projectFilterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const tag = (btn.dataset.tag || '').trim().toLowerCase();
    if (!tag) return;

    if (selectedProjectTags.has(tag)) {
      selectedProjectTags.delete(tag);
      btn.classList.remove('active');
    } else {
      selectedProjectTags.add(tag);
      btn.classList.add('active');
    }

    applyProjectFilters(searchInput.value.trim().toLowerCase());
  });
});

themeToggle.addEventListener('click', () => {
  const current = document.body.dataset.theme === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
switchTab('about');
