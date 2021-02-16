import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {hideWindowAndBackdrop, leaveAllPages} from '../../redux'

import {
  descriptionShareContainer,
  descriptionShareDevice,
  travellersDelivery,
  dollarIcon
} from 'assets'

import {
  GetStartedPageHeader,
  GetStartedPageForm,
  GetStartedPageFooter,
  GetStartedPageStatistic
} from 'components'

import './videoCustomise.css'

import {
  GetStartedPageWrapper,
  CompanyInfoWrapper,
  VideoStatisticWrapper,
  StatisticWrapper,
  StatisticWrapperMini,
  ContentWrapper,
  Title,
  Description,
  Nav,
  CompanyHelpsWith,
  CompanyHelpsWithItem,
  CompanyHelpsWithItemLink,
  CompanyHelpsWithIcon
} from './style'

const GetStartedPage = (props) => {
  useEffect(() => {
    localStorage.setItem('return-route', '/')
  }, [])

  useEffect(() => {
    props.leaveAllPagesCmp()
  }, [props])

  return (
    <GetStartedPageWrapper>
      <GetStartedPageHeader history={props.history}/>
      <CompanyInfoWrapper>
        <VideoStatisticWrapper>
          <iframe title="about-video" id="main-video" src="https://www.youtube.com/embed/GWGbOjlJDkU" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen/>
          <StatisticWrapper>
            <GetStartedPageStatistic/>
          </StatisticWrapper>
        </VideoStatisticWrapper>
        <ContentWrapper>
          <Title>
            3 Shipping options that  gets you cheap rates
          </Title>
          <Description>
            Afribaggage is a solution provider helping improve international shipping and providing earning opportunities for <Nav to="#!">travelers</Nav> and <Nav to="#!">Carriers</Nav>
          </Description>
          <CompanyHelpsWith>
            All-in-one shipping tool set:
          </CompanyHelpsWith>
          <CompanyHelpsWithItem>
            <CompanyHelpsWithItemLink to="#!">
              <CompanyHelpsWithIcon src={descriptionShareContainer}/>
              Share a container
            </CompanyHelpsWithItemLink>
          </CompanyHelpsWithItem>
          <CompanyHelpsWithItem>
            <CompanyHelpsWithItemLink to="#!">
              <CompanyHelpsWithIcon src={descriptionShareDevice}/>
              Share a unit load device
            </CompanyHelpsWithItemLink>
          </CompanyHelpsWithItem>
          <CompanyHelpsWithItem>
            <CompanyHelpsWithItemLink to="/item-travellers-list">
              <CompanyHelpsWithIcon src={travellersDelivery}/>
              Share a travellers luggage space
            </CompanyHelpsWithItemLink>
          </CompanyHelpsWithItem>
          <CompanyHelpsWithItem>
            <CompanyHelpsWithItemLink to="#!">
              <CompanyHelpsWithIcon src={dollarIcon}/>
              Make money as a carrier or Traveller
            </CompanyHelpsWithItemLink>
          </CompanyHelpsWithItem>
        </ContentWrapper>
      </CompanyInfoWrapper>
      <GetStartedPageForm/>
      <StatisticWrapperMini>
        <GetStartedPageStatistic/>
      </StatisticWrapperMini>
      <GetStartedPageFooter/>
    </GetStartedPageWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideWindowAndBackdropCmp: () => dispatch(hideWindowAndBackdrop()),
    leaveAllPagesCmp: () => dispatch(leaveAllPages())
  }
}

export default connect(null, mapDispatchToProps)(GetStartedPage)