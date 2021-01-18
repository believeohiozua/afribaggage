import React from 'react'
import {namedLogo} from 'assets'

import {
  FooterWrapper,
  LinksWrapper,
  LeftLinksWrapper,
  Nav,
  RightLinksWrapper,
  ContactsInfo,
  Email,
  Address,
  PhoneNumber,
  ExtraInfoWrapper,
  ExtraInfo,
  LogoWrapper,
  Logo
} from './style'

const GetStartedPageFooter = () => {
  return (
    <FooterWrapper>
      <LinksWrapper>
        <LeftLinksWrapper>
          <Nav to="#!">About</Nav>
          <Nav to="#!">Contact us</Nav>
          <Nav to="#!">Resources</Nav>
        </LeftLinksWrapper>
        <RightLinksWrapper>
          <Nav to="#!">Transport</Nav>
          <Nav to="#!">Advertise</Nav>
          <Nav to="#!">Terms of Use</Nav>
        </RightLinksWrapper>
      </LinksWrapper>
      <ContactsInfo>
        <Email>help@afribaggage.com</Email>
        <Address>Lagos, High street 68</Address>
        <PhoneNumber>+234 626 623 73 26</PhoneNumber>
      </ContactsInfo>
      <ExtraInfoWrapper>
        <ExtraInfo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </ExtraInfo>
      </ExtraInfoWrapper>
      <LogoWrapper>
        <Logo src={namedLogo}/>
      </LogoWrapper>
    </FooterWrapper>
  )
}

export default GetStartedPageFooter