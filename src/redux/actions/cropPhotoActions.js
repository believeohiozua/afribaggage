import {
  SELECT_AVATAR,
  CROP_AVATAR,
  CHANGE_PHOTO_SCALE
} from '../actionTypes'

export const selectAvatar = (selectedAvatar) => {
  return {
    type: SELECT_AVATAR,
    payload: selectedAvatar
  }
}

export const cropAvatar = (croppedAvatar) => {
  return {
    type: CROP_AVATAR,
    payload: croppedAvatar
  }
}

export const changePhotoScale = (scale) => {
  return {
    type: CHANGE_PHOTO_SCALE,
    payload: scale
  }
}