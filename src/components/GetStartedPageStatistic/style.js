import styled from 'styled-components'

export const WhoUseAfribaggageWrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 1.59211px 3.18421px 4.77632px rgba(0, 0, 0, .03);
  border-radius: 10px;
  padding: 17px 23px;
  width: 381px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  
  @media screen and (max-width: 1040px) {
    padding: 12px 16px;
    width: 264px;
    margin: 0 auto;
  }
`

export const WhoUseAfribaggagePhotos = styled.div`
  display: flex; 
`

export const UserAvatarWrapper = styled.div` 
  width: 57px;
  height: 57px;
  box-sizing: border-box;
  position: relative;
  right: 13px;
  
  :first-of-type {
    right: 0;
  }
  
  :last-of-type {
    right: 26px;
  }
  
  @media screen and (max-width: 1040px) {
    width: 40px;
    height: 40px;
  }
`

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export const StatisticWrapper = styled.div`
  position: relative;
  right: 10px;
`

export const RatingStarsWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`

export const RatingStar = styled.img`
  margin-right: 3px;
  width: 20px;
  height: 20px;
  
  :last-of-type {
    margin-right: 0;
  }
  
  @media screen and (max-width: 1040px) {
    width: 14px;
    height: 14px;
  }
`

export const UsersAmount = styled.p`
  font-size: 18.7px;
  font-weight: 500;
  line-height: 150%;
  
  @media screen and (max-width: 1040px) {
    font-size: 13px;
  }
`

export const CompanyName = styled.span`
  color: #f05050;
`