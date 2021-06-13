const themeToggleBtn = document.getElementById('theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('theme') === undefined) {
  localStorage.setItem('theme', Theme.LIGHT);
}

function setTheme() {
  document.body.classList.remove(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  document.body.classList.add(localStorage.getItem('theme'));
}

themeToggleBtn.addEventListener('change', function () {
  localStorage.setItem(
    'theme',
    localStorage.getItem('theme') === Theme.DARK ? Theme.LIGHT : Theme.DARK,
  );
  setTheme();
});

setTheme();

if (localStorage.getItem('theme') === Theme.DARK) {
  themeToggleBtn.checked = true;
}
