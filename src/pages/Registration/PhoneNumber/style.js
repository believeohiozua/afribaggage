import styled from 'styled-components'

export const FieldWrapper = styled.div``

export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #909395;
  margin-bottom: 6px;
  margin-left: 10px;
`

export const InputWrapper = styled.div`
  padding: 0 10px;
  border: 1px solid #C6D2DE;
  box-sizing: border-box;
  border-radius: 8px;
  
  :nth-child(2) {
    input {
      padding: 10px;
      font-size: 18px;
      border: none;
      border-left: 1px solid #C6D2DE;
    }
  }
`

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #ff0000;
  margin-top: 5px;
  text-align: right;
  opacity: ${p => !p.isValid && p.isTouched ? 1 : 0};
`