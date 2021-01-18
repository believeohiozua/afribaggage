import {combineReducers} from 'redux'
import {pagesReducer} from './pagesReducer'
import {filtersReducer} from './filtersReducer'
import {overlayReducer} from './overlayReducer'
import {userInfoReducer} from './userInfoReducer'

export const rootReducer = combineReducers({
  pages: pagesReducer,
  filters: filtersReducer,
  overlay: overlayReducer,
  userInfo: userInfoReducer
})