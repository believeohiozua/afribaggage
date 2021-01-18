import {SHOW_WINDOW_AND_BACKDROP, HIDE_WINDOW_AND_BACKDROP} from '../actionTypes'

export const showWindowAndBackdrop = () => {
  return {
    type: SHOW_WINDOW_AND_BACKDROP
  }
}

export const hideWindowAndBackdrop = () => {
  return {
    type: HIDE_WINDOW_AND_BACKDROP
  }
}