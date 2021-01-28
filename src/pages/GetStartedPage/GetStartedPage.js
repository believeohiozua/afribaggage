import React from 'react'
import {
  descriptionShareContainer,
  descriptionShareDevice,
  travellersDelivery,
  dollarIcon,
  ratingStar,
  user1,
  user2,
  user3
} from 'assets'

import {
  GetStartedPageHeader,
  GetStartedPageForm,
  GetStartedPageFooter
} from 'components'

import './videoCustomise.css'

import {
  GetStartedPageWrapper,
  CompanyInfoWrapper,
  VideoWrapper,
  ContentWrapper,
  Title,
  Description,
  Nav,
  CompanyHelpsWith,
  CompanyHelpsWithItem,
  CompanyHelpsWithIcon,
  WhoUseAfribaggageWrapper,
  WhoUseAfribaggagePhotos,
  UserAvatarWrapper,
  Avatar,
  StatisticWrapper,
  RatingStarsWrapper,
  RatingStar,
  UsersAmount,
  CompanyName
} from './style'

const GetStartedPage = (props) => {
  return (
    <GetStartedPageWrapper>
      <GetStartedPageHeader history={props.history}/>
      <CompanyInfoWrapper>
        <VideoWrapper>
          <iframe title="about-video" id="main-video" src="https://www.youtube.com/embed/GWGbOjlJDkU" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen/>
        </VideoWrapper>
        <ContentWrapper>
          <Title>
            3 Shipping options that  gets you cheap rates
          </Title>
          <Description>
            Afribaggage is a website that allows you to split the cost of international shipping by <Nav to="#!">sharing shipping spaces</Nav> with others. while providing earning opportunities for Carriers/Travellers
          </Description>
          <CompanyHelpsWith>
            All-in-one shipping tool set:
          </CompanyHelpsWith>
          <CompanyHelpsWithItem>
            <CompanyHelpsWithIcon src={descriptionShareContainer}/>Share a container
          </CompanyHelpsWithItem>
          <CompanyHelpsWithItem>
            <CompanyHelpsWithIcon src={descriptionShareDevice}/>Share a unit load device
          </CompanyHelpsWithItem>
          <CompanyHelpsWithItem>
            <CompanyHelpsWithIcon src={travellersDelivery}/>Share a travellers luaggage space
          </CompanyHelpsWithItem>
          <CompanyHelpsWithItem>
            <CompanyHelpsWithIcon src={dollarIcon}/>Make money as a carrier or Traveller
          </CompanyHelpsWithItem>
        </ContentWrapper>
      </CompanyInfoWrapper>
      <GetStartedPageForm/>
      <WhoUseAfribaggageWrapper>
        <WhoUseAfribaggagePhotos>
          <UserAvatarWrapper>
            <Avatar src={user1}/>
          </UserAvatarWrapper>
          <UserAvatarWrapper>
            <Avatar src={user2}/>
          </UserAvatarWrapper>
          <UserAvatarWrapper>
            <Avatar src={user3}/>
          </UserAvatarWrapper>
        </WhoUseAfribaggagePhotos>
        <StatisticWrapper>
          <RatingStarsWrapper>
            <RatingStar src={ratingStar}/>
            <RatingStar src={ratingStar}/>
            <RatingStar src={ratingStar}/>
            <RatingStar src={ratingStar}/>
            <RatingStar src={ratingStar}/>
          </RatingStarsWrapper>
          <UsersAmount>
            254+ users already use <CompanyName>Afribaggage</CompanyName>
          </UsersAmount>
        </StatisticWrapper>
      </WhoUseAfribaggageWrapper>
      <GetStartedPageFooter/>
    </GetStartedPageWrapper>
  )
}

export default GetStartedPage