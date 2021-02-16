import styled from 'styled-components'

export const PageWrapper = styled.div`
  padding: 15px 6.4%;
  box-sizing: border-box;
  
  & * {
    &::-webkit-scrollbar {
      width: 2px;
      background-color: rgba(0, 0, 0, .1);
    } 

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, .4);
    }
  }
`

export const Header = styled.div`
  display: flex;  
  align-items: center;
  justify-content: space-between; 
  padding: 0 10px 17px;
  border-bottom: 1px solid #CACACA;
  box-sizing: border-box;
  margin-bottom: 16px;
  
  @media screen and (max-width: 360px) {
    padding: 0 0 17px;
  }
`

export const GoBackButton = styled.button`
  background: none;
  border: none;
  width: 8.75px;
  height: 17.5px;
  margin-right: 16.25px;
  
  @media screen and (max-width: 374px) {
    width: 7px;
    height: 14.58px;
    margin-right: 10px;
  }
`

export const GoBackIcon = styled.img`
  width: 8.75px;
  height: 17.5px;
  
  @media screen and (max-width: 374px) {
    width: 7px;
    height: 14.58px;
  }
`

export const FromToCountriesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  box-sizing: border-box;
`

export const FromToCountryWrapper = styled.div`
  display: flex;
  width: 47%;
  box-sizing: border-box;
  
  &:first-child {
    justify-content: flex-end;
  }
  
  @media screen and (max-width: 450px) {
    width: auto;
    max-width: 47%;
  
    &:first-child {
      justify-content: flex-start;
    }
  
    &:last-child {
      justify-content: flex-end;
    }
  }
`

export const FromToCountryFlag = styled.img`
  width: 28px;
  height: 20px;
  margin-right: 6px;
  position: relative;
  top: 2px;
  
  @media screen and (max-width: 400px) {
    width: 20px;
    height: 14px;
  }
`

export const FromToCountry = styled.span`
  font-size: 18px;
  font-weight: 500;
  width: auto;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
  
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`

export const FromToLine = styled.div`
  width: 6px;
  height: 2px;
  background: #000000;
`

export const UserDescriptionFirstPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserInfo = styled.div`
  display: flex;
  max-width: 90%;
`

export const Avatar = styled.img`
  width: 50px;  
  height: 50px;
  border-radius: 50%;
  border: 2.28px solid ${p => p.isSenderCardSelected ?  '#f05050' : '#4378FF'};
  box-sizing: border-box;
  margin-right: 10px;
`

export const NameStatusWrapper = styled.div`
  margin-right: 8px;  
  display: flex;  
  flex-direction: column; 
  max-width: 30%;
`

export const Name = styled.span`
  font-size: 16px;  
  font-weight: 500;
  color: #000000;
  margin-bottom: 5px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
  max-width: 100%;
  
  @media screen and (max-width: 374px) {
    font-size: 14px;
  }
`

export const Status = styled.span`
  font-size: 14px;  
  font-weight: 500;
  color: #959595;
  
  @media screen and (max-width: 374px) {
    font-size: 12px;
  }
`

export const DateWrapper = styled.p`
  font-size: 16px;
  color: #737373;
  
  @media screen and (max-width: 374px) {
    font-size: 14px;
  }
`

export const Date = styled.span`
  color: #f05050;
  display: ${p => p.isSenderCardSelected ?  'inline-block' : 'block'};
  margin-left: ${p => p.isSenderCardSelected ?  '5px' : 0};
`

export const UploadButton = styled.button`
  background: none;
  border: none;
  width: 22.8px;
  height: 26.6px;
`

export const UploadIcon = styled.img`
  width: 22.8px;
  height: 26.6px;
`

export const UserDescriptionSecondPart = styled.div`
  display: flex;
  padding: 25px 0 ${p => p.isSenderCardSelected ? '20px' : '30px'};
  border-bottom: ${p => p.isSenderCardSelected ? 'none' : '1px solid #CACACA'};
`

export const PriceWrapper = styled.div`
  padding: 8px 13px;  
  background: #FFFFFF;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, .02);
  border-radius: 6px;
  margin-right: 14px;
  max-width: 40%; 
  height: fit-content;
`

export const DescriptionItemWrapper = styled.div`
  &:first-child {
    margin-bottom: 17px;    
  }
`

export const DescriptionItemLabel = styled.p`
  font-size: 13.6px;  
  color: #737373;
  margin-bottom: 8px; 
  
  @media screen and (max-width: 374px) {
    font-size: 12px;
  }
`

export const DescriptionMultipleItem = styled.div`
  display: flex;
`

export const DescriptionItem = styled.p`
  font-size: 18px;  
  font-weight: 500;
  word-break: break-word;
  max-height: 50px;
  overflow: auto; 
  
  @media screen and (max-width: 374px) {
    font-size: 14px;
    max-height: 40px;
  }
`

export const LocationWrapper = styled.div`
  padding: 8px 13px;
  background: #FFFFFF;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, .02);
  border-radius: 6px;
  max-width: 70.5%;
  
  @media screen and (max-width: 692px) {
    max-width: ${p => p.isSenderCardSelected ?  '70%' : '64.5%'};
  }
  
  @media screen and (max-width: 576px) {
    max-width: ${p => p.isSenderCardSelected ?  '65%' : '59.5%'};  
  }
  
  @media screen and (max-width: 494px) {
    max-width: ${p => p.isSenderCardSelected ?  '60%' : '53.5%'};
  }
  
  @media screen and (max-width: 432px) {
    max-width: ${p => p.isSenderCardSelected ?  '55%' : '47.5%'};
  }
  
  @media screen and (max-width: 384px) {
    max-width: ${p => p.isSenderCardSelected ?  '49%' : '42%'};
  }
`

export const ItemDescriptionWrapper = styled.div``

export const ItemDescriptionHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const ItemDescriptionHeaderLabel = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  
  @media screen and (max-width: 374px) {
    font-size: 14px;
  }
`

export const ItemName = styled.span`
  color: #959595;
  max-width: 77%;
  max-height: 75px;
  margin-left: 5px;
  font-size: 18px;
  word-break: break-word;
  overflow: auto;
  
  @media screen and (max-width: 772px) {
    max-width: 75%;
  }
  
  @media screen and (max-width: 710px) {
    max-width: 70%;
  }
  
  @media screen and (max-width: 592px) {
    max-width: 65%;
  }
  
  @media screen and (max-width: 507px) {
    max-width: 60%;
  }
  
  @media screen and (max-width: 444px) {
    max-width: 55%;
  }
  
  @media screen and (max-width: 395px) {
    max-width: 50%;
  }
  
  @media screen and (max-width: 374px) {
    font-size: 14px;
    max-height: 60px;
  }
`

export const ItemDescription = styled.div`
  display: flex;
  margin-bottom: 30px;
`

export const AmountWrapper = styled.div`
  padding: 8px 13px;
  background: #FFFFFF;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, .02);
  border-radius: 6px;
  width: 34%;
  max-width: 130px;
  margin-right: 14px;
  height: fit-content;
`

export const ActiveUnit = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin: 0 5px;
  
  @media screen and (max-width: 374px) {
    font-size: 14px;
  }
`

export const ExtraUnit = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #959595;
  
  @media screen and (max-width: 374px) {
    font-size: 14px;
  }
`

export const PackageLocationWrapper = styled.div`
  padding: 8px 13px;  
  background: #FFFFFF;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, .02);
  border-radius: 6px;
  max-width: 100%;
  
  @media screen and (max-width: 583px) {
    max-width: 65%;
  }
  
  @media screen and (max-width: 507px) {
    max-width: 60%;
  }
  
  @media screen and (max-width: 444px) {
    max-width: 55%;
  }
  
  @media screen and (max-width: 395px) {
    max-width: 50%;
  }
`

export const RequirementsFromTraveller = styled.div`
  margin: 25px 0;
`

export const RequirementsTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #f05050;
  margin-bottom: 15px;
  
  @media screen and (max-width: 374px) {
    font-size: 14px;
  }
`

export const RequirementsContent = styled.p`
  font-size: 16px;
  color: #959595;
  line-height: 150%;
  max-height: 150px;
  overflow: auto;
  
  @media screen and (max-width: 374px) {
    font-size: 12px;
    max-height: 90px;
  }
`

export const VideoSection = styled.div`
  padding-top: 30px;
  border-top: 1px solid #CACACA;
  margin-bottom: 90px;
  
  @media screen and (max-width: 374px) {
    margin-bottom: 70px;
  }
`

export const VideoWrapper = styled.div`
  position: relative;
`

export const Video = styled.img`
  width: calc(100% - 7px);
  border-radius: 10px;
  //background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  //filter: blur(20px);
`

export const VideoErrorMessageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  border-radius: 10px;
`

export const VideoErrorMessage = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  line-height: 140%;
  padding: 0 15px;
  width: calc(100% - 7px);
  box-sizing: border-box;
`

export const UserAvatarWrapper = styled.div`
  position: absolute;
  right: -11px;
  top: -11px;
`

export const BottomBtnsWrapper = styled.div`
  background: #F05050;
  padding: 3px;
  display: flex;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 70px;
  
  @media screen and (max-width: 374px) {
    height: 50px; 
  }
`

export const BottomBtn = styled.button`
  width: 50%;
  text-transform: uppercase;
  background: #ffffff;
  color: #F05050;
  border: none;
  font-size: 16px;
  font-weight: 600;
  
  &:last-child {
    background: #F05050;
    color: #ffffff;
  }
  
  @media screen and (max-width: 374px) {
    font-size: 14px;
    font-weight: 500;
  }
`