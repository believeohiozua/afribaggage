import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterWrapper = styled.div`
  padding: 31px 7.5%;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const LinksWrapper = styled.div`
  display: flex;
  
  @media screen and (max-width: 1040px) {
    flex-direction: column;
  }
`

export const LeftLinksWrapper = styled.div`
  margin-right: 30px;
`

export const Nav = styled(Link)`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: #FF9494;
  margin-bottom: 15px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 520px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 481px) {
    font-size: 12px;
  }
  
  @media screen and (max-width: 445px) {
    font-size: 10px; 
  }
  
  @media screen and (max-width: 410px) {
    font-size: 8px; 
  }
`

export const RightLinksWrapper = styled.div``

export const ContactsInfo = styled.div``

export const Email = styled.p`
  font-size: 18px;
  color: #959595;
  margin-bottom: 16px;
  
  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 520px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 481px) {
    font-size: 12px;
  }
  
  @media screen and (max-width: 445px) {
    font-size: 10px; 
  }
  
  @media screen and (max-width: 410px) {
    font-size: 8px; 
  }
`

export const Address = styled.p`
  font-size: 18px;
  color: #959595;
  margin-bottom: 16px;
  
  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 520px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 481px) {
    font-size: 12px;
  }
  
  @media screen and (max-width: 445px) {
    font-size: 10px; 
  }
  
  @media screen and (max-width: 410px) {
    font-size: 8px; 
  }
`

export const PhoneNumber = styled.p`
  font-size: 18px;
  color: #CACACA;
  
  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 520px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 481px) {
    font-size: 12px;
  }
  
  @media screen and (max-width: 445px) {
    font-size: 10px; 
  }
  
  @media screen and (max-width: 410px) {
    font-size: 8px; 
  }
`

export const ExtraInfoWrapper = styled.div`
  width: 28.4%;
  
  @media screen and (max-width: 810px) {
    position: absolute;
    bottom: 43px;
    left: 35%;
    width: 60%;
  }
  
  @media screen and (max-width: 520px) {
    left: 30%;
  }
  
  @media screen and (max-width: 481px) {
    font-size: 12px;
  }
  
  @media screen and (max-width: 445px) {
    font-size: 10px; 
  }
  
  @media screen and (max-width: 410px) {
    font-size: 8px; 
  }
`

export const ExtraInfo = styled.p`
  font-size: 18px;
  line-height: 175%;
  color: #CACACA;
  
  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 520px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 481px) {
    font-size: 12px;
  }
  
  @media screen and (max-width: 445px) {
    font-size: 10px; 
  }
  
  @media screen and (max-width: 410px) {
    font-size: 8px; 
  }
`

export const LogoWrapper = styled.div`
  width: 125px;
  
  @media screen and (max-width: 481px) {
    width: 110px;
  } 
  
  @media screen and (max-width: 445px) {
    width: 90px;
  }
`

export const Logo = styled.img`
  width: 100%;
`