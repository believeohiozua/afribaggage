import {
  SELECT_LOADS,
  SELECT_TRIPS,
  // GET_FOUND_OFFERS,
  // FILTER,
  // SORT,
  SHOW_USER_INFO,
  HIDE_USER_INFO
} from '../actionTypes'

const initialState = {
  areLoadsSelected: true,
  areTripsSelected: false,
  isUserInfoVisible: false,
  // foundedOffers: 40,
  // filteredArr: [],
  // sortedArr: []
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
    // case GET_FOUND_OFFERS:
    //   return {...state, foundedOffers: action.payload}
    // case FILTER:
    //   return {...state, filteredArr: action.payload}
    // case SORT:
    //   return {...state, sortedArr: action.payload}
    case SHOW_USER_INFO:
      return {...state, isUserInfoVisible: true}
    case HIDE_USER_INFO:
      return {...state, isUserInfoVisible: false}
    default:
      return state
  }
}