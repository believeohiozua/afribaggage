import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterWrapper = styled.div`
  background: #FFFAFA;
  display: flex;
  justify-content: space-between;
  padding: 34px 3.05%;
  margin-top: 138px;
  
  @media screen and (max-width: 1040px) {
    margin-top: 60px; 
  }
  
  @media screen and (max-width: 691px) {
    padding: 15px 3.05%;
  }
  
  @media screen and (max-width: 407px) {
    align-items: center;
    padding: 15px 18px;
  }
`

export const LinksContactsWrapper = styled.div`
  display: flex;
  
  @media screen and (max-width: 407px) {
    flex-direction: column;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
`

export const FirstLinksPart = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  
  &:last-child {
    margin-bottom: 0; 
  }
`

export const CompanyInfoLink = styled(Link)`
  font-size: 22px;
  font-weight: 500;
  color: #FF9494;
  margin-bottom: 10px;
  text-decoration: none;
  
  &:active {
    text-decoration: underline;
  }
  
  @media screen and (min-width: 800px) {
    &:hover {
      text-decoration: underline;
    }
  }
  
  @media screen and (max-width: 1268px) {
    font-size: 18px;
  }
  
  @media screen and (max-width: 691px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 497px) {
    font-size: 12px;
  }
  
  @media screen and (max-width: 452px) {
    font-size: 10px;
  }
`

export const SecondLinksPart = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;

  &:last-child {
    margin-bottom: 0; 
  }
  
  @media screen and (max-width: 691px) {
    margin-right: 15px;
  }
`

export const ContactsWrapper = styled.div`
  margin-right: 15px;
  
  @media screen and (max-width: 407px) {
    margin-top: 10px;
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 11px;
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  @media screen and (max-width: 691px) {
    margin-bottom: 8px;
  }
  
  @media screen and (max-width: 497px) {
    margin-bottom: 3px;
  }
  
  @media screen and (max-width: 452px) {
    margin-bottom: 11px; 
  }
`

export const ContactIcon = styled.img`
  margin-right: 6px;
  width: 22px;
  height: 22px;
  
  @media screen and (max-width: 452px) {
    width: 12px;
    height: 12px;
  }
`

export const ContactValue = styled.span`
  font-size: 22px;
  color: #959595;
  
  @media screen and (max-width: 1268px) {
    font-size: 18px;
  }
  
  @media screen and (max-width: 691px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 497px) {
    font-size: 12px;
  }
  
  @media screen and (max-width: 452px) {
    font-size: 10px;
  }
`

export const CompanyInfoMessage = styled.p`
  font-size: 20px;
  color: #959595;
  max-width: 442px;
  margin-right: 15px;
  line-height: 175%;
  
  @media screen and (max-width: 1268px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 1177px) {
    max-width: 325px;
  }
  
  @media screen and (max-width: 1053px) {
    max-width: 270px;
  }
  
  @media screen and (max-width: 994px) {
    display: none;
  }
`

export const LogoSocialLinksWrapper = styled.div`
  text-align: right;
`

export const LogoWrapper = styled.div``

export const Logo = styled.img`
  width: 125px;
  
  @media screen and (max-width: 691px) {
    width: 82px;
  }
`

export const SocialLinksWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  
  @media screen and (max-width: 690px) {
    display: none;  
  }
`

export const SocialLink = styled(Link)`
  text-decoration: none;
  width: 20px;
  height: 20px;
  margin-right: 16px;
  
  &:last-of-type {
    margin-right: 0;
  }
`

export const SocialLinkIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const SocialLinksWrapperMini = styled.div`
  display: flex;
  justify-content: center;  
  
  @media screen and (min-width: 691px) {
    display: none;  
  }
`

export const SocialLinkMini = styled(Link)`
  text-decoration: none;
  margin-right: 6px;
  
  &:last-of-type {
    margin-right: 0;
  }
`

export const SocialLinkIconMini = styled.img`
  width: 16px;
  height: 16px; 
  
  @media screen and (max-width: 407px) {
    width: 12px;
    height: 12px;
  }
`