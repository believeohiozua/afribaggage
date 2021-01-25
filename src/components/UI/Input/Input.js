import React from 'react'
import {placeIcon} from 'assets'

import {
  InputWrapper,
  Label,
  Icon,
  Field,
  ErrorMessage
} from './style'

const Input = (props) => {
  return (
    <InputWrapper width={props.width} style={props.style}>
      <Label>
        {props.label}
      </Label>
      {props.hasLeftIcon ? <Icon src={placeIcon}/> : null}
      <Field
        name={props.name}
        type={props.type}
        height={props.height}
        hasLeftIcon={props.hasLeftIcon}
        value={props.value}
        isValid={props.isValid}
        isTouched={props.isTouched}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}/>
      <ErrorMessage
        isValid={props.isValid}
        isTouched={props.isTouched}>{props.errorMessage}</ErrorMessage>
    </InputWrapper>
  )
}

export default Input