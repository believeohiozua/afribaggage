import React, {useState, useCallback, useMemo} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {AuthLayout} from 'layouts'

import {FieldWrapper, Label, InputWrapper, ErrorMessage} from './style'

const PhoneNumber = (props) => {
  const getDefaultPhoneNumberValue = useCallback(() => {
    const loginData = JSON.parse(localStorage.getItem('loginData'))
    if (loginData) {
      if (loginData.phoneNumber) {
        return loginData.phoneNumber
      }
    }
  }, [])

  const getReturnRoute = useMemo(() => {
    return localStorage.getItem('return-route')
  }, [])

  const [phoneNumberControl, setPhoneNumberControl] = useState({
    value: getDefaultPhoneNumberValue(),
    isValid: false,
    isTouched: false,
    errorMessage: 'Fill in the field',
    rules: {
      required: true,
      isPhoneNumber: true
    }
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

      localStorage.setItem('loginData', JSON.stringify(formData))

      control.value = ''
      control.isValid = false
      control.isTouched = false
      control.errorMessage = 'Fill in the field'
      props.history.push('/login-phone-number-verification')
    }

    setPhoneNumberControl(control)
  }

  return (
    <AuthLayout
      history={props.history}
      pageAction="Log In"
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