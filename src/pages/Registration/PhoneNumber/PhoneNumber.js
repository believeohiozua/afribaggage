import React, {useState} from 'react'
import {Input} from 'components/UI'
import {AuthLayout} from 'layouts'
import {firstLevelOfRegistration} from 'assets'
import {checkValidity} from 'utils'

const PhoneNumber = (props) => {
  const [phoneNumberControl, setPhoneNumberControl] = useState({
    value: '',
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

    control.value = event.target.value

    let number

    if (control.value[0] === '+') {
      number = '+' + control.value.replace(/[^\d]/g, '')
    } else {
      number = control.value.replace(/[^\d]/g, '')
    }

    control.isValid = checkValidity(number.trim(), control.rules)

    if (!control.isValid) {
      if (control.value.length > 0) {
        control.errorMessage = 'Write number in +1 345 567 format'
      } else {
        control.errorMessage = 'Fill in the field'
      }
    }

    setPhoneNumberControl(control)
  }

  const submitHandler = () => {
    const control = {...phoneNumberControl}

    let number

    if (control.value[0] === '+') {
      number = '+' + control.value.replace(/[^\d]/g, '')
    } else {
      number = control.value.replace(/[^\d]/g, '')
    }

    control.isValid = checkValidity(number.trim(), control.rules)
    control.isTouched = true

    if (control.value.length > 0) {
      control.errorMessage = 'Write number in +1 345 567 format'
    } else {
      control.errorMessage = 'Fill in the field'
    }

    if (control.isValid) {
      const formData = {}
      formData.phoneNumber = '+' + control.value.replace(/[^\d]/g, '')

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
      comeBackPage="/"
      submitAction="continue"
      submitHandler={submitHandler}>
      <Input
        type="tel"
        label="What is your phone number?"
        height="45px"
        placeholder="+1 569 926 53 35"
        value={phoneNumberControl.value}
        isValid={phoneNumberControl.isValid}
        isTouched={phoneNumberControl.isTouched}
        errorMessage={phoneNumberControl.errorMessage}
        onChange={changeHandler}/>
    </AuthLayout>
  )
}

export default PhoneNumber