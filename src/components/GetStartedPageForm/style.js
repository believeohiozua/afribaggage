import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GetStartedPageFormWrapper = styled.div`
  width: 820px;
  max-width: 82%;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.03);
  margin: 0 auto 30px;
  padding: 20px 30px;
  border: 1px solid #C6D2DE;
  box-sizing: border-box;
  
  @media screen and (max-width: 855px) {
    width: 360px;
    max-width: 73%;
  }
  
  @media screen and (max-width: 582px) {
    max-width: 90%;
  }
`

export const FormHeader = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 30px;
  
  @media screen and (max-width: 855px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-right: 30px;
  
  @media screen and (max-width: 855px) {
    font-size: 20px;
  }
  
  @media screen and (max-width: 582px) {
    font-size: 16px;
  }
`

export const GoogleConnect = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #CACACA;
  
  @media screen and (max-width: 582px) {
    font-size: 14px;
  }
`

export const Nav = styled(Link)`
  color: #739AFF;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 855px) {
    flex-direction: column;
  }
`

export const InputWrapper = styled.div`
  width: 42%; 
  
  @media screen and (max-width: 855px) {
    width: 100%;
    height: 80px;
    margin-right: 0;
  }
`

export const ButtonWrapper = styled.div`
  //width: 11.5%;
  height: 45px;
  position: relative;
  top: 7px;
  
  @media screen and (max-width: 841px) {
    width: 20%;
  }
  
  @media screen and (max-width: 855px) {
    width: 100%;
    top: 0;
    margin-top: 30px;
    height: 35px;
  }
`

export const FieldWrapper = styled.div`
  margin-top: 10px;
`

export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #909395;
  margin-bottom: 6px;
  margin-left: 10px;
`

export const PhoneNumberInputWrapper = styled.div`
  padding-left: 10px;
  border: 1px solid #C6D2DE;
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;
  
  :nth-child(2) {
    input {
      padding: 10px;
      font-size: 16px;
      border: none;
      border-left: 1px solid #C6D2DE;
      
      &::placeholder {
        color: #C7CFD3;
      }
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