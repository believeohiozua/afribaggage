import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterWrapper = styled.div`
  padding: 31px 7.5%;
  background: #ffffff;
  position: relative;
  margin-bottom: ${p => p.isWindowOpen ? '55px' : 0};
  
  @media screen and (max-width: 445px) {
    padding: 14px 18px;
  }
`
export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LinksWrapper = styled.div`
  display: flex;
`

export const LeftLinksWrapper = styled.div`
  margin-right: 30px;
  
  @media screen and (max-width: 550px) {
    margin-right: 15px;
  }
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
  
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 550px) {
    font-size: 13px;
  }
  
  @media screen and (max-width: 445px) {
    margin-bottom: 10px;
  } 
`

export const RightLinksWrapper = styled.div``

export const ContactsInfo = styled.div`
  @media screen and (max-width: 424px) {
    display: none;
  }
`

export const Email = styled.p`
  font-size: 18px;
  color: #959595;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 550px) {
    font-size: 13px;
  }
  
  @media screen and (max-width: 445px) {
    margin-bottom: 10px;
  }
  
  @media screen and (max-width: 424px) {
    font-size: 11px;
    margin-bottom: 0;
  }
  
  @media screen and (max-width: 410px) {
    font-size: 10px;
  }
  
  @media screen and (max-width: 375px) {
    font-size: 9px;
  }
  
  @media screen and (max-width: 350px) {
    font-size: 8px;
  }
`

export const Address = styled.p`
  font-size: 18px;
  color: #959595;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 550px) {
    font-size: 13px;
  }
  
  @media screen and (max-width: 445px) {
    margin-bottom: 10px; 
  }
  
  @media screen and (max-width: 424px) {
    font-size: 11px;
    margin-bottom: 0;
  }
  
  @media screen and (max-width: 410px) {
    font-size: 10px;
  }
  
  @media screen and (max-width: 375px) {
    font-size: 9px;
  }
  
  @media screen and (max-width: 350px) {
    font-size: 8px;
  }
`

export const PhoneNumber = styled.p`
  font-size: 18px;
  color: #CACACA;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 550px) {
    font-size: 13px;
  }
  
  @media screen and (max-width: 424px) {
    font-size: 11px;
  }
  
  @media screen and (max-width: 410px) {
    font-size: 10px;
  }
  
  @media screen and (max-width: 375px) {
    font-size: 9px;
  }
  
  @media screen and (max-width: 350px) {
    font-size: 8px;
  }
`

export const LogoSocietiesWrapper = styled.div`
  width: 125px;
  
  @media screen and (max-width: 550px) {
    width: 83px;
  }  
`

export const Logo = styled.img`
  width: 100%;
`

export const Societies = styled.div`
  width: 66px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  
  @media screen and (min-width: 382px) {
    display: none;
  }
`

export const SocietyLink = styled.a``

export const SocietyImage = styled.img``

export const ContactsInfoMini = styled.div`
  display: flex;  
  justify-content: space-between;
  margin-top: 7px;  

  @media screen and (min-width: 425px) {
    display: none;
  } 
`

export const Icon = styled.img`
  display: inline-block;
  margin-right: 2.84px;
`