import React, {useState} from 'react'
import {Input, Button} from 'components/UI'
import {checkValidity, validForm} from 'utils'

import {
  GetStartedPageFormWrapper,
  FormHeader,
  Title,
  GoogleConnect,
  Nav,
  Form,
  InputWrapper,
  ButtonWrapper
} from './style'

const GetStartedPageForm = () => {
  const [isCodeVerificationActive, setIsCodeVerificationActive] = useState(false)
  const [controls, setControls] = useState({
    email: {
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Fill in the field',
      rules: {
        required: true,
        isEmail: true
      }
    },
    phoneNumber: {
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Fill in the field',
      rules: {
        required: true,
        isPhoneNumber: true
      }
    },
    phoneNumberVerification: {
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Fill in the field',
      rules: {
        required: true,
        isPhoneNumberVerification: true
      }
    }
  })

  const changeHandler = (event) => {
    const fields = {...controls}
    const {name} = event.target

    fields[name].value = event.target.value

    if (name !== 'phoneNumber') {
      fields[name].isValid = checkValidity(event.target.value.trim(), fields[name].rules)
    } else {
      if (event.target.value[0] === '+') {
        fields.phoneNumber.isValid = checkValidity('+' + event.target.value.trim().replace(/[^\d]/g, ''), fields.phoneNumber.rules)
      } else {
        fields.phoneNumber.isValid = checkValidity(event.target.value.trim().replace(/[^\d]/g, ''), fields.phoneNumber.rules)
      }
    }

    if (fields[name].value.trim() === '') {
      fields.email.errorMessage = 'Fill in the field'
    }

    if (!fields.email.isValid) {
      fields.email.errorMessage = 'Wrong email address'
    }

    if (!fields.phoneNumber.isValid) {
      fields.phoneNumber.errorMessage = 'Write number in +1 345 567 format'
    }

    if (fields.phoneNumberVerification.value.trim().length !== 4 &&
      fields.phoneNumberVerification.value.trim().length) {
      fields.phoneNumberVerification.errorMessage = 'Write 4 numbers'
    }

    if (!fields.phoneNumberVerification.value.trim().length) {
      fields.phoneNumberVerification.errorMessage = 'Fill in the field'
    }

    setControls(fields)
  }

  const blurHandler = (event) => {
    const fields = {...controls}
    const {name} = event.target

    if (name !== 'phoneNumber') {
      fields[name].isValid = checkValidity(event.target.value.trim(), fields[name].rules)
    } else {
      if (event.target.value[0] === '+') {
        fields.phoneNumber.isValid = checkValidity('+' + event.target.value.trim().replace(/[^\d]/g, ''), fields.phoneNumber.rules)
      } else {
        fields.phoneNumber.isValid = checkValidity(event.target.value.trim().replace(/[^\d]/g, ''), fields.phoneNumber.rules)
      }
    }

    fields[name].isTouched = true

    if (fields[name].value.trim() === '') {
      fields[name].errorMessage = 'Fill in the field'
    }

    if (fields.email.value.trim().length) {
      fields.email.errorMessage = 'Wrong email address'
    }
    
    if (fields.phoneNumber.value.trim().length) {
      fields.phoneNumber.errorMessage = 'Write number in +1 345 567 format'
    }

    if (fields.phoneNumberVerification.value.trim().length !== 4 &&
      fields.phoneNumberVerification.value.trim().length) {
      fields.phoneNumberVerification.errorMessage = 'Write 4 numbers'
    }

    if (!fields.phoneNumberVerification.value.trim().length) {
      fields.phoneNumberVerification.errorMessage = 'Fill in the field'
    }

    setControls(fields)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const fields = {...controls}
    const formData = {}

    if (controls.phoneNumberVerification.isValid) {
      Object.entries(fields).forEach(item => {
        if (item[0] !== 'phoneNumberVerification') {
          formData[item[0]] = item[1].value
        }
        item[1].value = ''
        item[1].isValid = false
        item[1].isTouched = false
        item[1].errorMessage = 'Fill in the field'
      })

      console.log(formData)
    } else {
      formData.phoneNumber = fields.phoneNumber.value
      console.log(formData)
    }
    setControls(fields)
    setIsCodeVerificationActive(true)
  }

  return (
    <GetStartedPageFormWrapper>
      <FormHeader>
        <Title>Sign up for Afribaggage</Title>
        <GoogleConnect>
          Connect with <Nav to="#!">Google</Nav>
        </GoogleConnect>
      </FormHeader>
      <Form>
        {!isCodeVerificationActive ? (
          <>
            <InputWrapper>
              <Input
                name="email"
                type="text"
                label="Email address"
                height="45px"
                value={controls.email.value}
                isValid={controls.email.isValid}
                isTouched={controls.email.isTouched}
                errorMessage={controls.email.errorMessage}
                placeholder="your@email.com"
                onChange={changeHandler}
                onBlur={blurHandler}/>
            </InputWrapper>
            <InputWrapper>
              <Input
                name="phoneNumber"
                type="text"
                label="Phone number"
                height="45px"
                value={controls.phoneNumber.value}
                isValid={controls.phoneNumber.isValid}
                isTouched={controls.phoneNumber.isTouched}
                errorMessage={controls.phoneNumber.errorMessage}
                placeholder="+1 434 543"
                onChange={changeHandler}
                onBlur={blurHandler}/>
            </InputWrapper>
          </>
        ) : (
          <InputWrapper>
            <Input
              name="phoneNumberVerification"
              type="text"
              label="Code verification"
              height="45px"
              value={controls.phoneNumberVerification.value}
              isValid={controls.phoneNumberVerification.isValid}
              isTouched={controls.phoneNumberVerification.isTouched}
              errorMessage={controls.phoneNumberVerification.errorMessage}
              placeholder="1234"
              onChange={changeHandler}
              onBlur={blurHandler}/>
          </InputWrapper>
        )}
        <ButtonWrapper>
          <Button
            btnType="primary"
            disabled={
              !isCodeVerificationActive ?
                !(controls.email.isValid && controls.phoneNumber.isValid) :
                !controls.phoneNumberVerification.isValid
            }
            onClick={submitHandler}>
            SIGN UP
          </Button>
        </ButtonWrapper>
      </Form>
    </GetStartedPageFormWrapper>
  )
}

export default GetStartedPageForm