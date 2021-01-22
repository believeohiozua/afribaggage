import {
  SELECT_AVATAR,
  CROP_AVATAR,
  SELECT_PASSPORT,
  CROP_PASSPORT,
  CHANGE_PHOTO_SCALE
} from '../actionTypes'

const initialState = {
  selectedAvatar: '',
  croppedAvatar: '',
  selectedPassport: '',
  croppedPassport: '',
  photoScale: 1.5
}

export const cropPhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_AVATAR:
      return {...state, selectedAvatar: action.payload}
    case CROP_AVATAR:
      return {...state, croppedAvatar: action.payload}
    case SELECT_PASSPORT:
      return {...state, selectedPassport: action.payload}
    case CROP_PASSPORT:
      return {...state, croppedPassport: action.payload}
    case CHANGE_PHOTO_SCALE:
      return {...state, photoScale: action.payload}
    default:
      return state
  }
}