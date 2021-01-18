import {
  SELECT_LOADS,
  SELECT_TRIPS,
  // GET_FOUND_OFFERS,
  // FILTER,
  // SORT,
  HIDE_USER_INFO,
  SHOW_USER_INFO
} from '../actionTypes'

export const selectLoads = () => {
  return {
    type: SELECT_LOADS
  }
}

export const selectTrips = () => {
  return {
    type: SELECT_TRIPS
  }
}

// export const getFoundOffers = (count) => {
//   return {
//     type: GET_FOUND_OFFERS,
//     payload: count
//   }
// }

// export const filter = (arr) => {
//   return {
//     type: FILTER,
//     payload: arr
//   }
// }
//
// export const sort = (arr) => {
//   return {
//     type: SORT,
//     payload: arr
//   }
// }

export const showUserInfo = () => {
  return {
    type: SHOW_USER_INFO
  }
}

export const hideUserInfo = () => {
  return {
    type: HIDE_USER_INFO
  }
}