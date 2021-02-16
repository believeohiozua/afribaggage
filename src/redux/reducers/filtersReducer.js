import {
  SELECT_LOADS,
  SELECT_TRIPS,
  SHOW_USER_INFO,
  HIDE_USER_INFO,
  SHOW_FILTERS_BLOCK,
  HIDE_FILTERS_BLOCK
} from '../actionTypes'

const initialState = {
  isFiltersBlockVisible: false,
  areLoadsSelected: true,
  areTripsSelected: false,
  isUserInfoVisible: false
}

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LOADS:
      return {
        ...state,
        areLoadsSelected: true,
        areTripsSelected: false,
        isUserInfoVisible: false
      }
    case SELECT_TRIPS:
      return {
        ...state,
        areLoadsSelected: false,
        areTripsSelected: true,
        isUserInfoVisible: false
      }
    case SHOW_USER_INFO:
      return {...state, isUserInfoVisible: true}
    case HIDE_USER_INFO:
      return {...state, isUserInfoVisible: false}
    case SHOW_FILTERS_BLOCK:
      return {...state, isFiltersBlockVisible: true}
    case HIDE_FILTERS_BLOCK:
      return {...state, isFiltersBlockVisible: false}
    default:
      return state
  }
}