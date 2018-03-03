import { SHOW_BAD_URL } from '../actions/bad-url'

export const badUrl = (state = '', action) => action.type === SHOW_BAD_URL ? action.url : state
