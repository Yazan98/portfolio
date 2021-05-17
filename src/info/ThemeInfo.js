export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';
export const THEME_KEY = 'theme';

export function setApplicationToLightTheme() {
  localStorage.setItem(THEME_KEY, LIGHT_THEME);
}

export function setApplicationToDarkTheme() {
  localStorage.setItem(THEME_KEY, DARK_THEME);
}

export function isApplicationLightTheme() {
  return localStorage.getItem(THEME_KEY) === LIGHT_THEME;
}
