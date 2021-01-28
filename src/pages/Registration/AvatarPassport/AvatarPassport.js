import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {AuthLayout} from 'layouts'
import {forthLevelOfRegistration, setAvatar, setPassport} from 'assets'
import {changePhotoScale, selectAvatar} from '../../../redux'

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
  const [croppedAvatar, setCroppedAvatar] = useState('')
  const [selectedPassport, setSelectedPassport] = useState('')

  useEffect(() => {
    const registrationData = JSON.parse(localStorage.getItem('registrationData'))
    if (!registrationData) {
      props.history.push('/phone-number')
    } else {
      setCroppedAvatar(registrationData.avatar)
      setSelectedPassport(registrationData.passport)
    }
  }, [props.history])

  const changeHandler = (event) => {
    const file = event.target.files[0]
    const inputId = event.target.id
    const registrationData = JSON.parse(localStorage.getItem('registrationData'))

    if (file) {
      const reader = new FileReader()
      if (inputId === 'avatar') {
        reader.onload = async (event) => {
          props.selectAvatarCmp(event.target.result)
          props.changePhotoScaleCmp(1.5)
          if (event.target.result) {
            props.history.push('/crop-photo')
          }
        }
      } else if (inputId === 'passport') {
        reader.onload = (event) => {
          registrationData.passport = event.target.result
          setSelectedPassport(registrationData.passport)
          localStorage.setItem('registrationData', JSON.stringify(registrationData))
        }
      }

      reader.readAsDataURL(file)
    }
  }

  const submitHandler = () => {
    if (croppedAvatar && selectedPassport) {
      setIisSubmitted(true)
      const registrationData = JSON.parse(localStorage.getItem('registrationData'))
      console.log('Registration data', registrationData)
      localStorage.setItem('registrationData', JSON.stringify(registrationData))
      localStorage.removeItem('registrationData')
      props.history.push('/login-phone-number')
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
        <Label htmlFor="avatar" photo={croppedAvatar}>
          {!croppedAvatar ? (
            <>
              <PhotoImg src={setAvatar}/>
              <Action>Set avatar</Action>
            </>
          ) : null}
          <AddButton>+</AddButton>
        </Label>
        <ErrorMessage
          isAvatarErrorVisible={!croppedAvatar && isSubmitted}>
          Choose the photo</ErrorMessage>
      </AvatarFieldWrapper>
      <PassportFieldWrapper>
        <PhotoField
          type="file"
          id="passport"
          multiple
          accept="image/*"
          onChange={changeHandler}/>
        <Label htmlFor="passport" photo={selectedPassport}>
          {!selectedPassport ? (
            <>
              <PhotoImg src={setPassport}/>
              <Action>Passport</Action>
            </>
          ) : null}
          <AddButton>+</AddButton>
        </Label>
        <ErrorMessage
          isPassportErrorVisible={!selectedPassport && isSubmitted}>
          Choose the photo</ErrorMessage>
      </PassportFieldWrapper>
    </AuthLayout>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectAvatarCmp: (selectedPhoto) => dispatch(selectAvatar(selectedPhoto)),
    changePhotoScaleCmp: (scale) => dispatch(changePhotoScale(scale))
  }
}

export default connect(null, mapDispatchToProps)(AvatarPassport)