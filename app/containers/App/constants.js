/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const GET_ROLES = 'SH/GLOBAL/GET_ROLES';
export const UPDATE_ROLES = 'SH/GLOBAL/UPDATE_ROLES';
export const GET_LANGUAGES = 'SH/GLOBAL/GET_LANGUAGES';
export const UPDATE_LANGUAGES = 'SH/GLOBAL/UPDATE_LANGUAGES';
export const GET_AGERANGE = 'SH/GLOBAL/GET_AGERANGE';
export const UPDATE_AGERANGE = 'SH/GLOBAL/UPDATE_AGERANGE';
export  const GET_GENRES = 'SH/GLOBAL/GET_GENRES';
export const UPDATE_GENRES = 'SH/GLOBAL/UPDATE_GENRES';
export const GET_COUNTRY = 'SH/GLOBAL/GET_COUNTRY';
export const UPDATE_COUNTRY  ='SH/GLOBAL/UPDATE_COUNTRY';
