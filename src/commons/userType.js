export const USER_TYPE_COORDINATOR = 0;
export const USER_TYPE_ADMINISTRATOR = 1;
export const USER_TYPE_VISITOR = 2;
export const LOGGED_USER = location.pathname.toLowerCase().includes("coordinator")? USER_TYPE_COORDINATOR : USER_TYPE_ADMINISTRATOR;