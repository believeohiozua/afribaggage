import {
  SHOW_ITEM_WEIGHT_IN_KG,
  SHOW_ITEM_WEIGHT_IN_LBS
} from '../actionTypes'

const initialState = {
  isItemWeightInKg: true,
  isItemWeightInLbs: false
}

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ITEM_WEIGHT_IN_KG:
      return {...state, isItemWeightInKg: true, isItemWeightInLbs: false}
    case SHOW_ITEM_WEIGHT_IN_LBS:
      return {...state, isItemWeightInLbs: true, isItemWeightInKg: false}
    default:
      return state
  }
}