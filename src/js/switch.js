const themeSwitch = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const valueTheme = localStorage.getItem('theme');
if (valueTheme !== 'DARK') {
  body.classList.add(Theme.LIGHT);
} else {
  body.classList.add(Theme.DARK);
  themeSwitch.setAttribute('checked', true);
}

themeSwitch.addEventListener('change', change);
function change() {
  if (body.classList.contains(Theme.LIGHT)) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'DARK');
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'LIGHT');
  }
}
