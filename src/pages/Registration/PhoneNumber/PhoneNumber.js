import React, {useState, useEffect} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {AuthLayout} from 'layouts'
import {firstLevelOfRegistration} from 'assets'
import './phoneNumberCustomise.css'

import {InputWrapper, ErrorMessage} from './style'

const PhoneNumber = (props) => {
  const registrationData = JSON.parse(localStorage.getItem('registrationData'))
  const [phoneNumberControl, setPhoneNumberControl] = useState({
    value: '',
    isValid: false,
    isTouched: false,
    errorMessage: 'Fill in the field'
  })

  useEffect(() => {
    if (registrationData) {
      if (registrationData.phoneNumber) {
        const field = {...phoneNumberControl}
        field.value = registrationData.phoneNumber
        setPhoneNumberControl(field)
      }
    }
  }, [])

  const changeHandler = (value, country, e, formattedValue) => {
    const control = {...phoneNumberControl}

    control.value = formattedValue
    control.isValid = control.value.length === country.format.length

    console.log(control.isValid)

    setPhoneNumberControl(control)
  }

  const submitHandler = () => {
    const control = {...phoneNumberControl}

    if (control.isValid) {
      const formData = {}
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
      // props.history.push('/phone-number-verification')
    }

    setPhoneNumberControl(control)
  }

  return (
    <AuthLayout
      history={props.history}
      register
      pageAction="Registration"
      registerLevel={firstLevelOfRegistration}
      comeBackPage="/"
      submitAction="continue"
      submitHandler={submitHandler}>
      <InputWrapper>
        <PhoneInput
          country={'us'}
          value={phoneNumberControl.value}
          isValid={phoneNumberControl.isValid}
          isTouched={phoneNumberControl.isTouched}
          onChange={(value, country, e, formattedValue) => changeHandler(value, country, e, formattedValue)}
        />
        <ErrorMessage
          isValid={phoneNumberControl.isValid}
          isTouched={phoneNumberControl.isTouched}>
          {phoneNumberControl.errorMessage}</ErrorMessage>
      </InputWrapper>
    </AuthLayout>
  )
}

export default PhoneNumber