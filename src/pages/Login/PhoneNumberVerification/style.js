import styled from 'styled-components'

export const CodeFieldsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const CodeField = styled.input`
  display: inline-block;
  width: 56px;
  box-sizing: border-box;
  margin-right: 20px;
  border: none;
  border-bottom: 3px solid #C6D2DE;
  font-size: 36px;  
  font-weight: 500;
  color: #565656;
  text-align: center;
  
  :last-of-type {
    margin-right: 0;
  }  
  
  &::placeholder {
    color: #C6D2DE;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  }
  
  @media screen and (max-width: 350px) {
    margin-right: 15px;
  }
  
  @media screen and (max-width: 335px) {
    margin-right: 10px;
  }
`

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 12px;
  margin-top: 15px;
  text-align: right;
  opacity: ${p => !p.isFormValid && p.isFormSubmitted ? 1 : 0};
`