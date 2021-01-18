import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: ${p => p.width};
  box-sizing: border-box;
  position: relative;
`

export const Label = styled.label`
  display: inline-block;
  margin: 0 0 8px 10px;
  font-size: 12px;
  font-weight: 500;
  color: #909395;
`

export const Icon = styled.img`
  position: absolute;
  top: 46%;
  left: 17.6px;
`

export const Field = styled.input`
  display: inline-block;
  width: 100%;
  height: ${p => p.height};
  padding: ${p => p.hasLeftIcon ? '0 10px 0 42.6px' : '0 24px'};
  font-size: 16px;
  font-weight: normal;
  border: 1px solid #B5C1CE;
  border-radius: 5px;
  box-sizing: border-box;
  
  &::placeholder {
    color: #C7CFD3;
  }
`

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 12px;
  text-align: right;
  padding-right: 5px;
  opacity: ${p => !p.isValid && p.isTouched ? 1 : 0};
`