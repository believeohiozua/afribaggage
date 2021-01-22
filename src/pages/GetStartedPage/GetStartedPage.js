import React from 'react'
import {videoImage, baggageBlackIcon, earthBlackIcon} from 'assets'

import {
  GetStartedPageHeader,
  GetStartedPageForm,
  GetStartedPageFooter
} from 'components'


import {
  GetStartedPageWrapper,
  CompanyInfoWrapper,
  VideoWrapper,
  Video,
  ContentWrapper,
  Title,
  Description,
  Nav,
  CompanyHelpsWith,
  CompanyHelpsWithItem,
  CompanyHelpsWithIcon
} from './style'

const GetStartedPage = (props) => {
  return (
    <GetStartedPageWrapper>
      <GetStartedPageHeader history={props.history}/>
      <CompanyInfoWrapper>
        <VideoWrapper>
          <Video src={videoImage}/>
        </VideoWrapper>
        <ContentWrapper>
          <Title>
            Send your items easily with many options
          </Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consectetur. <Nav to="#!">See how it works</Nav>
          </Description>
          <CompanyHelpsWith>
            Afribaggage helps you with:
          </CompanyHelpsWith>
          <CompanyHelpsWithItem>
            <CompanyHelpsWithIcon src={baggageBlackIcon}/>Moving your stuff for long distances
          </CompanyHelpsWithItem>
          <CompanyHelpsWithItem>
            <CompanyHelpsWithIcon src={earthBlackIcon}/>Get paid for travelling
          </CompanyHelpsWithItem>
        </ContentWrapper>
      </CompanyInfoWrapper>
      <GetStartedPageForm/>
      <GetStartedPageFooter/>
    </GetStartedPageWrapper>
  )
}

export default GetStartedPage