import { SHOW_BAD_URL } from '../actions/bad-url'

// reducer using ternary
// typically would be a switch statement

export const badUrl = (state = '', action) => action.type === SHOW_BAD_URL ? action.url : state
