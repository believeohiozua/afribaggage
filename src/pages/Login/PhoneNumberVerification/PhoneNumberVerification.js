import React, {useState, useRef, useEffect} from 'react'
import {AuthLayout} from 'layouts'
import {validForm} from 'utils'

import {CodeFieldsWrapper, CodeField, ErrorMessage} from './style'

const PhoneNumberVerification = (props) => {
  const firstCodeNumber = useRef(null)
  const secondCodeNumber = useRef(null)
  const thirdCodeNumber = useRef(null)
  const forthCodeNumber = useRef(null)

  const [isFormValid, setIsFormValid] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [controls, setControls] = useState({
    firstNumber: {
      value: '',
      isValid: false,
      isTouched: false,
      codeItem: 1
    },
    secondNumber: {
      value: '',
      isValid: false,
      isTouched: false,
      codeItem: 2
    },
    thirdNumber: {
      value: '',
      isValid: false,
      isTouched: false,
      codeItem: 3
    },
    forthNumber: {
      value: '',
      isValid: false,
      isTouched: false,
      codeItem: 4
    }
  })

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem('loginData'))
    if (!loginData) {
      props.history.push('/login-phone-number')
    }
  })

  const changeHandler = (event) => {
    const fields = {...controls}
    const {name} = event.target

    if (!isFormValid || event.target.value.length < fields[name].value.length) {
      if (event.target.value.length <= 1) {
        fields[name].value = event.target.value
      }
      fields[name].isValid = event.target.value.length === 1
      fields[name].isTouched = true

      switch (fields[name].codeItem) {
        case 1:
          if (event.target.value.length) {
            secondCodeNumber.current.focus()
          }
          break
        case 2:
          if (event.target.value.length) {
            thirdCodeNumber.current.focus()
          }
          break
        case 3:
          if (event.target.value.length) {
            forthCodeNumber.current.focus()
          }
          break
        default:
          if (event.target.value.length) {
            firstCodeNumber.current.focus()
          }
      }

      setIsFormValid(validForm(fields))
      setControls(fields)
    }
  }

  const submitHandler = () => {
    if (isFormValid) {
      const fields = {...controls}
      const formData = {}
      const verificationCode = []

      Object.values(fields).forEach(item => {
        verificationCode.push(item.value)
        item.value = ''
        item.isValid = false
        item.isTouched = false
      })

      formData.verificationCode = verificationCode.join('')
      console.log('formData', formData)

      setControls(fields)

      localStorage.removeItem('loginData')

      // props.history.push('/name')
    } else {
      setIsFormSubmitted(true)
    }
  }

  return (
    <AuthLayout
      history={props.history}
      pageAction="Code Verification"
      comeBackPage="/login-phone-number"
      submitAction="continue"
      submitHandler={submitHandler}>
      <CodeFieldsWrapper style={{marginTop: '65px'}}>
        <CodeField
          ref={firstCodeNumber}
          type="number"
          data-codeitem={1}
          name="firstNumber"
          value={controls.firstNumber.value}
          placeholder="1"
          onChange={changeHandler}/>
        <CodeField
          ref={secondCodeNumber}
          type="number"
          data-codeitem={2}
          name="secondNumber"
          value={controls.secondNumber.value}
          placeholder="2"
          onChange={changeHandler}/>
        <CodeField
          ref={thirdCodeNumber}
          type="number"
          data-codeitem={3}
          name="thirdNumber"
          value={controls.thirdNumber.value}
          placeholder="3"
          onChange={changeHandler}/>
        <CodeField
          ref={forthCodeNumber}
          type="number"
          data-codeitem={4}
          name="forthNumber"
          value={controls.forthNumber.value}
          placeholder="4"
          onChange={changeHandler}/>
      </CodeFieldsWrapper>
      <ErrorMessage
        isFormValid={isFormValid}
        isFormSubmitted={isFormSubmitted}>Fill in all fields</ErrorMessage>
    </AuthLayout>
  )
}

export default PhoneNumberVerification