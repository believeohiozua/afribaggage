import styled from 'styled-components'

export const InputWrapper = styled.div`
  box-sizing: border-box;
`

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #ff0000;
  margin-top: 5px;
  text-align: right;
  opacity: ${p => !p.isValid && p.isTouched ? 1 : 0};
`