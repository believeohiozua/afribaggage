import React, {useState, useEffect} from 'react'
import {Input} from 'components/UI'
import {AuthLayout} from 'layouts'
import {secondLevelOfRegistration} from 'assets'
import {checkValidity} from 'utils'

const Name = (props) => {
  const [isFormValid, setIsFormValid] = useState(false)
  const [nameControl, setNameControl] = useState({
    value: '',
    isValid: false,
    isTouched: false,
    errorMessage: 'Fill in the field',
    rules: {
      minLength: 2,
      maxLength: 60
    }
  })

  useEffect(() => {
    const registrationData = JSON.parse(localStorage.getItem('registrationData'))
    if (!registrationData) {
      props.history.push('/phone-number')
    }
  })

  const changeHandler = (event) => {
    const control = {...nameControl}
    const {value} = event.target

    control.value = value
    control.isValid = checkValidity(value, control.rules)

    if (value.length === 1) {
      control.errorMessage = 'Name is too short'
    } else if (value.length > 60) {
      control.errorMessage = 'Name is too long'
    } else {
      control.errorMessage = 'Fill in the field'
    }

    setIsFormValid(control.isValid)
    setNameControl(control)
  }

  const submitHandler = () => {
    const control = {...nameControl}
    const {value} = control

    control.isValid = checkValidity(value, control.rules)
    control.isTouched = true

    if (value.length === 1) {
      control.errorMessage = 'Name is too short'
    } else if (value.length > 60) {
      control.errorMessage = 'Name is too long'
    } else {
      control.errorMessage = 'Fill in the field'
    }

    setIsFormValid(control.isValid)
    setNameControl(control)

    if (isFormValid) {
      const registrationData = JSON.parse(localStorage.getItem('registrationData'))
      registrationData.name = control.value
      localStorage.setItem('registrationData', JSON.stringify(registrationData))

      control.value = ''
      control.isValid = false
      control.isTouched = false
      control.errorMessage = 'Fill in the field'

      setNameControl(control)

      props.history.push('/gender')
    }
  }

  return (
    <AuthLayout
      history={props.history}
      register
      pageAction="Registration"
      registerLevel={secondLevelOfRegistration}
      comeBackPage="/phone-number-verification"
      submitAction="continue"
      submitHandler={submitHandler}>
      <Input
        type="text"
        label="What is your name?"
        height="45px"
        placeholder="Ben Ramtal"
        value={nameControl.value}
        isValid={nameControl.isValid}
        isTouched={nameControl.isTouched}
        errorMessage={nameControl.errorMessage}
        onChange={changeHandler}/>
    </AuthLayout>
  )
}

export default Name