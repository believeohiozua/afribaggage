import React from 'react'
import {ButtonElem} from './style'

const Button = (props) => (
  <ButtonElem
    btnType={props.btnType}
    style={props.style}
    disabled={props.disabled}
    onClick={props.onClick}>
    {props.children}
  </ButtonElem>
)

export default Button