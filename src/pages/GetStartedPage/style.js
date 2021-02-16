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
  
  @media screen and (max-width: 1040px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  
  @media screen and (max-width: 582px) {
    padding-bottom: 30px;
  }
`

export const VideoStatisticWrapper = styled.div`
  width: 48%;
  height: 0;
  padding-bottom: 27%;
  position: relative;
  
  @media screen and (max-width: 1040px) {
    width: 50%;
    margin: 0 auto;
    padding-bottom: 28.3%;
  }
  
  @media screen and (max-width: 750px) {
    width: 70%;
    padding-bottom: 39.4%;
  }
  
  @media screen and (max-width: 450px) {
    width: 100%;
    padding-bottom: 56.4%;
  }
`

export const StatisticWrapper = styled.div`
  position: absolute;
  bottom: -150px;
  //margin: 0 auto 138px;
  
  @media screen and (max-width: 1040px) {
    display: none;
  }
`

export const StatisticWrapperMini = styled.div`
  @media screen and (min-width: 1041px) {
    display: none;
  }
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
  
  @media screen and (max-width: 1040px) {
    text-align: center;
  }
  
  @media screen and (max-width: 750px) {
    font-size: 40px;
  }
  
  @media screen and (max-width: 520px) {
    font-size: 34px;
  }
  
  @media screen and (max-width: 410px) {
    font-size: 28px;
  }
  
  @media screen and (max-width: 410px) {
    font-size: 26px;
  }
`

export const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 28px;
  
  @media screen and (max-width: 1040px) {
    text-align: center;
  }
  
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
  
  &:active {
    text-decoration: underline;
  }
  
  @media screen and (min-width: 800px) {
    &:hover {
      text-decoration: underline;
    }
  }
`

export const CompanyHelpsWith = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  
  @media screen and (max-width: 750px) {
    font-size: 20px;
  }
`

export const CompanyHelpsWithItem = styled.div``

export const CompanyHelpsWithItemLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 14px;
  font-size: 16px;
  text-decoration: none;
  
  &:active {
    text-decoration: underline;
  }
  
  @media screen and (min-width: 800px) {
    &:hover {
      text-decoration: underline;
    }
  }
  
  @media screen and (max-width: 750px) {
    font-size: 14px;
    font-weight: 500;
  }
`

export const CompanyHelpsWithIcon = styled.img`
  margin-right: 8px;
  width: 28px;
  height: 28px; 
`