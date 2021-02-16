import React, {useState, useMemo} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {AuthLayout} from 'layouts'
import {firstLevelOfRegistration} from 'assets'

import {FieldWrapper, Label, InputWrapper, ErrorMessage} from './style'

const PhoneNumber = (props) => {
  const registrationData = JSON.parse(localStorage.getItem('registrationData'))

  const getDefaultPhoneNumberValue = useMemo(() => {
    if (registrationData) {
      if (registrationData.phoneNumber) {
        return registrationData.phoneNumber
      }
    }
  }, [registrationData])

  const getReturnRoute = useMemo(() => {
    return localStorage.getItem('return-route')
  }, [])

  const [phoneNumberControl, setPhoneNumberControl] = useState({
    value: getDefaultPhoneNumberValue,
    isValid: false,
    isTouched: false,
    errorMessage: 'Fill in the field'
  })

  const changeHandler = (event) => {
    const control = {...phoneNumberControl}

    control.value = event
    control.isValid = control.value ? control.value.length !== 0 : false

    setPhoneNumberControl(control)
  }

  const submitHandler = () => {
    const control = {...phoneNumberControl}

    control.isValid = control.value ? control.value.length !== 0 : false
    control.isTouched = true

    if (control.isValid) {
      const formData = {}
      formData.phoneNumber = phoneNumberControl.value

      if (registrationData) {
        if (registrationData.name) {
          formData.name = registrationData.name
        }
        if (registrationData.gender) {
          formData.gender = registrationData.gender
        }
        if (registrationData.avatar) {
          formData.avatar = registrationData.avatar
        }
        if (registrationData.passport) {
          formData.passport = registrationData.passport
        }
      }

      localStorage.setItem('registrationData', JSON.stringify(formData))

      control.value = ''
      control.isValid = false
      control.isTouched = false
      control.errorMessage = 'Fill in the field'
      props.history.push('/phone-number-verification')
    }

    setPhoneNumberControl(control)
  }

  return (
    <AuthLayout
      history={props.history}
      register
      pageAction="Registration"
      registerLevel={firstLevelOfRegistration}
      comeBackPage={getReturnRoute || '/'}
      submitAction="continue"
      submitHandler={submitHandler}>
      <FieldWrapper>
        <Label>What is your phone number? </Label>
        <InputWrapper>
          <PhoneInput
            international
            readOnly={!phoneNumberControl.value}
            value={phoneNumberControl.value}
            placeholder="Choose your country"
            onChange={changeHandler}
          />
        </InputWrapper>
        <ErrorMessage
          isValid={phoneNumberControl.isValid}
          isTouched={phoneNumberControl.isTouched}>
          {phoneNumberControl.errorMessage}</ErrorMessage>
      </FieldWrapper>
    </AuthLayout>
  )
}

export default PhoneNumber