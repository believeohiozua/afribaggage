import {
  SELECT_AVATAR,
  CROP_AVATAR,
  CHANGE_PHOTO_SCALE
} from '../actionTypes'

const initialState = {
  selectedAvatar: '',
  croppedAvatar: '',
  photoScale: 1.5
}

export const cropPhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_AVATAR:
      return {...state, selectedAvatar: action.payload}
    case CROP_AVATAR:
      return {...state, croppedAvatar: action.payload}
    case CHANGE_PHOTO_SCALE:
      return {...state, photoScale: action.payload}
    default:
      return state
  }
}