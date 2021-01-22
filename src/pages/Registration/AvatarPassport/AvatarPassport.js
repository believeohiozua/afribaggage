import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {AuthLayout} from 'layouts'
import {forthLevelOfRegistration, setAvatar, setPassport} from 'assets'
import {changePhotoScale, selectAvatar, selectPassport} from '../../../redux'

import {
  AvatarFieldWrapper,
  PhotoField,
  Label,
  PhotoImg,
  Action,
  AddButton,
  PassportFieldWrapper,
  ErrorMessage
} from './style'

const AvatarPassport = (props) => {
  const [isSubmitted, setIisSubmitted] = useState(false)

  useEffect(() => {
    const registrationData = JSON.parse(localStorage.getItem('registrationData'))
    if (!registrationData) {
      props.history.push('/phone-number')
    }
  })

  const changeHandler = (event) => {
    const file = event.target.files[0]
    const inputId = event.target.id

    if (file) {
      const reader = new FileReader()
      if (inputId === 'avatar') {
        reader.onload = async (event) => {
          props.selectAvatarCmp(event.target.result)
          props.selectPassportCmp('')
          props.changePhotoScaleCmp(1.5)
          if (event.target.result) {
            props.history.push('/crop-photo')
          }
        }
      } else if (inputId === 'passport') {
        reader.onload = (event) => {
          props.selectPassportCmp(event.target.result)
          props.selectAvatarCmp('')
          props.changePhotoScaleCmp(1.5)
          if (event.target.result) {
            props.history.push('/crop-photo')
          }
        }
      }

      reader.readAsDataURL(file)
    }
  }

  const submitHandler = () => {
    if (props.croppedAvatar && props.croppedPassport) {
      setIisSubmitted(true)
      const registrationData = JSON.parse(localStorage.getItem('registrationData'))
      registrationData.avatar = props.croppedAvatar
      registrationData.passport = props.croppedPassport
      console.log('Registration data', registrationData)
      localStorage.setItem('registrationData', JSON.stringify(registrationData))
      // localStorage.removeItem('registrationData')
    } else {
      setIisSubmitted(true)
    }
  }

  return (
    <AuthLayout
      history={props.history}
      register
      pageAction="Registration"
      registerLevel={forthLevelOfRegistration}
      comeBackPage="/gender"
      submitAction="register"
      submitHandler={submitHandler}>
      <AvatarFieldWrapper>
        <PhotoField
          type="file"
          id="avatar"
          multiple
          accept="image/*"
          onChange={changeHandler}/>
        <Label htmlFor="avatar" croppedAvatar={props.croppedAvatar}>
          {!props.croppedAvatar ? (
            <>
              <PhotoImg src={setAvatar}/>
              <Action>Set avatar</Action>
            </>
          ) : null}
          <AddButton>+</AddButton>
        </Label>
        <ErrorMessage
          isAvatarErrorVisible={!props.croppedAvatar && isSubmitted}>
          Choose the photo</ErrorMessage>
      </AvatarFieldWrapper>
      <PassportFieldWrapper>
        <PhotoField
          type="file"
          id="passport"
          multiple
          accept="image/*"
          onChange={changeHandler}/>
        <Label htmlFor="passport" croppedAvatar={props.croppedPassport}>
          {!props.croppedPassport ? (
            <>
              <PhotoImg src={setPassport}/>
              <Action>Passport</Action>
            </>
          ) : null}
          <AddButton>+</AddButton>
        </Label>
        <ErrorMessage
          isPassportErrorVisible={!props.croppedPassport && isSubmitted}>
          Choose the photo</ErrorMessage>
      </PassportFieldWrapper>
    </AuthLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    croppedAvatar: state.cropPhoto.croppedAvatar,
    croppedPassport: state.cropPhoto.croppedPassport
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectAvatarCmp: (selectedPhoto) => dispatch(selectAvatar(selectedPhoto)),
    selectPassportCmp: (selectedPhoto) => dispatch(selectPassport(selectedPhoto)),
    changePhotoScaleCmp: (scale) => dispatch(changePhotoScale(scale))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarPassport)