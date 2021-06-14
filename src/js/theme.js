const themeToggleBtn = document.getElementById('theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeToggleBtn.addEventListener('change', toggleThemeMode);

function toggleThemeMode() {
  if (themeToggleBtn.checked) {
    localStorage.setItem('theme', Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
  }
}

function setTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    themeToggleBtn.checked = true;
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
}
setTheme();
