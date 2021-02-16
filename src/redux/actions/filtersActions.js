import {
  SELECT_LOADS,
  SELECT_TRIPS,
  HIDE_USER_INFO,
  SHOW_USER_INFO,
  SHOW_FILTERS_BLOCK,
  HIDE_FILTERS_BLOCK
} from '../actionTypes'

export const showFiltersBlock = () => {
  return {
    type: SHOW_FILTERS_BLOCK
  }
}

export const hideFiltersBlock = () => {
  return {
    type: HIDE_FILTERS_BLOCK
  }
}

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