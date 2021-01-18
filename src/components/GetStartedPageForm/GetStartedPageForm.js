import React, {useState} from 'react'
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
  ButtonWrapper
} from './style'

const GetStartedPageForm = () => {
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
    }
  })

  const changeHandler = (event) => {
    const fields = {...controls}

    fields.email.value = event.target.value
    fields.email.isValid = checkValidity(event.target.value, fields.email.rules)

    if (fields.email.value.trim() === '') {
      fields.email.errorMessage = 'Fill in the field'
    }

    if (fields.email.value.trim().length) {
      fields.email.errorMessage = 'Wrong email address'
    }

    setControls(fields)
  }

  const blurHandler = (event) => {
    const fields = {...controls}

    fields.email.isValid = checkValidity(event.target.value, fields.email.rules)
    fields.email.isTouched = true

    if (fields.email.value.trim() === '') {
      fields.email.errorMessage = 'Fill in the field'
    }

    if (fields.email.value.trim().length) {
      fields.email.errorMessage = 'Wrong email address'
    }

    setControls(fields)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const fields = {...controls}
    const formData = {}

    Object.entries(fields).forEach(item => {
      formData[item[0]] = item[1].value
      item[1].value = ''
      item[1].isValid = false
      item[1].isTouched = false
      item[1].errorMessage = 'Fill in the field'
    })

    console.log(formData)
    setControls(fields)
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
        <ButtonWrapper>
          <Button
            btnType="primary"
            disabled={!controls.email.isValid}
            onClick={submitHandler}>
            SIGN UP
          </Button>
        </ButtonWrapper>
      </Form>
    </GetStartedPageFormWrapper>
  )
}

export default GetStartedPageForm