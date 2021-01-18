import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GetStartedPageFormWrapper = styled.div`
  width: 520px;
  max-width: 82%;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.03);
  margin: 0 auto 138px;
  padding: 20px 30px;
  border: 1px solid #C6D2DE;
  
  @media screen and (max-width: 582px) {
    width: 327px;
    max-width: 73%;
    margin-bottom: 42px;
  }
`

export const FormHeader = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 30px;
  
  @media screen and (max-width: 582px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-right: 30px;
  
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
  
  @media screen and (max-width: 582px) {
    flex-direction: column;
  }
`

export const InputWrapper = styled.div`
  width: 75%;
  
  @media screen and (max-width: 841px) {
    //width: 37%;
  }
  
  @media screen and (max-width: 582px) {
    width: 100%;
    height: 80px;
  }
`

export const ButtonWrapper = styled.div`
  width: 20%;
  height: 45px;
  position: relative;
  top: 7px;
  
  @media screen and (max-width: 841px) {
    width: 20%;
  }
  
  @media screen and (max-width: 582px) {
    width: 100%;
    top: 0;
    margin-top: 20px;
    height: 35px;
  }
`