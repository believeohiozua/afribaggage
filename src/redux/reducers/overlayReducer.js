import {SHOW_WINDOW_AND_BACKDROP, HIDE_WINDOW_AND_BACKDROP} from '../actionTypes'

const initialState = {
  isWindowOpen: false,
  isBackdropVisible: false
}

export const overlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_WINDOW_AND_BACKDROP:
      return {...state, isWindowOpen: true, isBackdropVisible: true}
    case HIDE_WINDOW_AND_BACKDROP:
      return {...state, isWindowOpen: false, isBackdropVisible: false}
    default:
      return state
  }
}