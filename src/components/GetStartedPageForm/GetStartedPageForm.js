import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {Input, Button} from 'components/UI'
import {checkValidity} from 'utils'

import {
  GetStartedPageFormWrapper,
  FormHeader,
  Title,
  GoogleConnect,
  Nav,
  Form,
  InputWrapper,
  ButtonWrapper,
  FieldWrapper,
  Label,
  PhoneNumberInputWrapper,
  ErrorMessage
} from './style'

const GetStartedPageForm = () => {
  const history = useHistory()
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

  useEffect(() => {
    const select = document.querySelector('.PhoneInputCountrySelect')
    console.log(select)
  }, [])

  const changeHandler = (event) => {
    const fields = {...controls}
    const name = event && event.target ? event.target.name : 'phoneNumber'

    if (name !== 'phoneNumber') {
      fields[name].value = event.target.value
      fields[name].isValid = checkValidity(event.target.value.trim(), fields[name].rules)
      if (fields[name].value.trim() === '') {
        fields.email.errorMessage = 'Fill in the field'
      }
      if (!fields.email.isValid) {
        fields.email.errorMessage = 'Wrong email address'
      }
      if (fields.phoneNumberVerification.value.trim().length !== 4 &&
        fields.phoneNumberVerification.value.trim().length) {
        fields.phoneNumberVerification.errorMessage = 'Write 4 numbers'
      }

      if (!fields.phoneNumberVerification.value.trim().length) {
        fields.phoneNumberVerification.errorMessage = 'Fill in the field'
      }
    } else {
      fields.phoneNumber.value = event
      fields.phoneNumber.isValid = fields.phoneNumber.value ? fields.phoneNumber.value.length !== 0 : false
    }

    setControls(fields)
  }

  const blurHandler = (event) => {
    const fields = {...controls}
    const {name} = event.target

    if (name !== 'phoneNumber') {
      fields[name].isValid = checkValidity(event.target.value.trim(), fields[name].rules)
      fields[name].isTouched = true

      if (fields[name].value.trim() === '') {
        fields[name].errorMessage = 'Fill in the field'
      }
      if (fields.email.value.trim().length) {
        fields.email.errorMessage = 'Wrong email address'
      }

      if (fields.phoneNumberVerification.value.trim().length !== 4 &&
        fields.phoneNumberVerification.value.trim().length) {
        fields.phoneNumberVerification.errorMessage = 'Write 4 numbers'
      }

      if (!fields.phoneNumberVerification.value.trim().length) {
        fields.phoneNumberVerification.errorMessage = 'Fill in the field'
      }
    } else {
      fields.phoneNumber.isValid = fields.phoneNumber.value ? fields.phoneNumber.value.length !== 0 : false
      fields.phoneNumber.isTouched = true
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
        history.push('/item-travellers-list')
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
              <FieldWrapper>
                <Label>What is your phone number? </Label>
                <PhoneNumberInputWrapper>
                  <PhoneInput
                    international
                    readOnly={!controls.phoneNumber.value}
                    name="phoneNumber"
                    value={controls.phoneNumber.value}
                    placeholder="Choose your country"
                    onChange={changeHandler}
                    onBlur={blurHandler}
                  />
                </PhoneNumberInputWrapper>
                <ErrorMessage
                  isValid={controls.phoneNumber.isValid}
                  isTouched={controls.phoneNumber.isTouched}>
                  {controls.phoneNumber.errorMessage}</ErrorMessage>
              </FieldWrapper>
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