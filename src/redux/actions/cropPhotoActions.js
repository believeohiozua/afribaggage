import {
  SELECT_AVATAR,
  CROP_AVATAR,
  SELECT_PASSPORT,
  CROP_PASSPORT,
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

export const selectPassport = (selectedPassport) => {
  return {
    type: SELECT_PASSPORT,
    payload: selectedPassport
  }
}

export const cropPassport = (croppedPassport) => {
  return {
    type: CROP_PASSPORT,
    payload: croppedPassport
  }
}

export const changePhotoScale = (scale) => {
  return {
    type: CHANGE_PHOTO_SCALE,
    payload: scale
  }
}