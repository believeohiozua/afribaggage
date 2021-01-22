import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import AvatarEditor from 'react-avatar-editor'
import {Button} from 'components/UI'
import {cropAvatar, cropPassport, changePhotoScale} from '../../../redux'

import {
  Title,
  AvatarEditorWrapper,
  PhotoEditorWrapper,
  InputRange,
  ScaleRangeWrapper,
  RangeLabel
} from './style'

const CropPhoto = (props) => {
  let avatarEditor = ''
  const setEditorRef = (editor) => avatarEditor = editor

  useEffect(() => {
    if (props.selectedAvatar === '' && props.selectedPassport === '') {
      props.history.push('/avatar-passport')
    }
  })

  const setAvatarImage = () => {
    if (avatarEditor) {
      const canvasScaledUrl = avatarEditor.getImage().toDataURL()
      if (props.selectedAvatar) {
        props.cropAvatarCmp(canvasScaledUrl)
      } else {
        props.cropPassportCmp(canvasScaledUrl)
      }

      props.history.push('/avatar-passport')
    }
  }

  const avatarRangeChange = (event) => {
    const inputValue = event.target.value
    const photoScale = inputValue / 100 + 1
    props.changePhotoScaleCmp(photoScale)
  }

  return (
    <PhotoEditorWrapper>
      <Title>Crop photo</Title>
      <AvatarEditorWrapper>
        <AvatarEditor
          ref={setEditorRef}
          image={props.selectedAvatar || props.selectedPassport}
          width={200}
          height={200}
          border={27}
          borderRadius={200}
          color={[0, 0, 0, .5]}
          scale={props.photoScale}/>
      </AvatarEditorWrapper>
      <ScaleRangeWrapper>
        <RangeLabel>Photo scale</RangeLabel>
        <InputRange
          type="range"
          defaultValue={50}
          min={0}
          max={100}
          onChange={avatarRangeChange}/>
      </ScaleRangeWrapper>
      <Button btnType="bottomFixed" onClick={setAvatarImage}>
        Save
      </Button>
    </PhotoEditorWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedAvatar: state.cropPhoto.selectedAvatar,
    selectedPassport: state.cropPhoto.selectedPassport,
    photoScale: state.cropPhoto.photoScale
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cropAvatarCmp: (croppedPhoto) => dispatch(cropAvatar(croppedPhoto)),
    cropPassportCmp: (croppedPhoto) => dispatch(cropPassport(croppedPhoto)),
    changePhotoScaleCmp: (scale) => dispatch(changePhotoScale(scale))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CropPhoto)