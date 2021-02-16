import styled from 'styled-components'

export const PostItemWrapper = styled.div`
  width: 100%;
  padding: 14px;
  background: #FFFFFF;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.02);
  border-radius: 6px;
  margin-bottom: 14px;
  cursor: pointer;
  box-sizing: border-box;
  
  :last-of-type {
    margin-bottom: 50px;
  }
`

export const PostItemFirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`

export const FromToWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #EDEDED;
  max-width: 70%;
`

export const FromToLine = styled.div`
  margin-right: 10px;
  height: 52px;
`

export const FromToLineImg = styled.img`
  width: 9px;
  height: 52px;
`

export const FromToCountries = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  
  @media screen and (max-width: 374px) {
    height: 50px;
  }
`

export const FromToCountry = styled.div`
  display: flex;
  align-items: center;
`

export const FromToCountryFlag = styled.img`
  width: 28px;
  height: 20px;
  margin-right: 6px;
  
  @media screen and (max-width: 374px) {
    width: 20px;
    height: 14px;
  }
`

export const FromToCountryName = styled.span`
  font-size: 18px;
  color: #000000;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
  max-width: 100%;
  
  @media screen and (max-width: 374px) {
    font-size: 14px;
  }
`

export const SafeWatermarkWrapper = styled.div`
  display: flex;
`

export const SafeWatermarkImg = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 5px;
  position: relative;
  top: 3px;
`

export const SafeWatermarkLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: #4378FF;
`

export const PostItemSecondSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  align-items: flex-end;
  box-sizing: border-box;
`

export const UserInfoWrapper = styled.div`
  display: flex;
  max-width: 70%;
`

export const UserAvatarWrapper = styled.div``

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border: 2.28px solid ${p => p.userStatus === 'Sender' ? '#F05050' : '#4378FF'};
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
`

export const UserNameStatusWrapper = styled.div`
  max-width: 75%;
`

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-shadow: 0 0 14.5989px rgba(0, 0, 0, 0.2);
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
  
  @media screen and (max-width: 374px) {
    font-size: 14px;
  }
`

export const UserStatus = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #737373;
  text-shadow: 0 0 14.5989px rgba(0, 0, 0, 0.2);
  
  @media screen and (max-width: 374px) {
    font-size: 12px;
  }
`

export const ItemDateWrapper = styled.div``

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const CalendarIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 7px;
  position: relative;
  bottom: 1px;
  
  @media screen and (max-width: 374px) {
    width: 14px;  
    height: 14px;   
  }
`

export const Date = styled.span`
  font-size: 18px;
  
  @media screen and (max-width: 374px) {
    font-size: 16px;
  }
`

export const Item = styled.span`
  font-size: 18px;
  
  @media screen and (max-width: 374px) {
    font-size: 16px;  
  }
`