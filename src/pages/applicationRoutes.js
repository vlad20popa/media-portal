export const PLATFORM = window.config.platform ? "/" + window.config.platform : '';

console.log(window.config.platform);

export const HOME_PAGE_ROUTE = PLATFORM + "/home";
export const LOGIN_PAGE_ROUTE = PLATFORM + "/login";
export const FAVORITES_PAGE_ROUTE = PLATFORM + "/favorites";