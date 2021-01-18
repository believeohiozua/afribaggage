import {
  SHOW_ITEM_WEIGHT_IN_KG,
  SHOW_ITEM_WEIGHT_IN_LBS
} from '../actionTypes'

export const showItemWeightInKg = () => {
  return {
    type: SHOW_ITEM_WEIGHT_IN_KG
  }
}

export const showItemWeightInLbs = () => {
  return {
    type: SHOW_ITEM_WEIGHT_IN_LBS
  }
}