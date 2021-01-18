import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GetStartedPageWrapper = styled.div`
  background: #F5F5F5;
`

export const CompanyInfoWrapper = styled.div`
  margin: 0 4.5%;
  padding: 138px 0 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 1040px) {
    flex-direction: column-reverse;
  }
  
  @media screen and (max-width: 582px) {
    padding-bottom: 30px;
  }
`

export const VideoWrapper = styled.div`
  width: 48%;
  
  @media screen and (max-width: 1040px) {
    width: 70%;
    margin: 0 auto;
  }
  
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`

export const Video = styled.img`
  width: 100%;
`

export const ContentWrapper = styled.div`
  width: 48%;
  
  @media screen and (max-width: 1040px) {
    width: 70%;
    margin-bottom: 30px;
  }
  
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  color: #0A143A;
  line-height: 150%;
  margin-bottom: 16px;
  
  @media screen and (max-width: 750px) {
    text-align: center;
    font-size: 40px;
  }
  
  @media screen and (max-width: 520px) {
    text-align: center;
    font-size: 34px;
  }
  
  @media screen and (max-width: 410px) {
    font-size: 28px;
  }
  
  @media screen and (max-width: 410px) {
    font-size: 27px;
  }
`

export const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 28px;
  
  @media screen and (max-width: 750px) {
    font-size: 20px;
  }
  
  @media screen and (max-width: 520px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 410px) {
    font-size: 14px;
  }
`

export const Nav = styled(Link)`
  color: #F05050;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

export const CompanyHelpsWith = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  
  @media screen and (max-width: 750px) {
    font-size: 20px;
  }
  
  @media screen and (max-width: 520px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 410px) {
    font-size: 14px;
    font-weight: 500;
  }
`

export const CompanyHelpsWithItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
  font-size: 16px;
  
  @media screen and (max-width: 750px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 410px) {
    font-size: 12px;
  }
`

export const CompanyHelpsWithIcon = styled.img`
  margin-right: 10px;
  
  @media screen and (max-width: 410px) {
    width: 26px;
  }
`