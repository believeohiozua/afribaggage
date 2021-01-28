import React from 'react'
import {connect} from 'react-redux'

import {
  facebookIcon,
  instagramIcon,
  namedLogo,
  telegramIcon,
  twitterIcon,
  footerEmailIcon,
  footerLocationIcon,
  footerPhoneIcon
} from 'assets'

import {
  Address,
  ContactsInfo,
  ContactsInfoMini,
  Email,
  FooterWrapper,
  LeftLinksWrapper,
  LinksWrapper,
  Logo,
  LogoSocietiesWrapper,
  Nav,
  PhoneNumber,
  RightLinksWrapper,
  Societies,
  SocietyImage,
  SocietyLink,
  FooterRow,
  Icon
} from './style'

const GetStartedPageFooter = (props) => {
  return (
    <FooterWrapper isWindowOpen={props.isWindowOpen}>
      <FooterRow>
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
        <LogoSocietiesWrapper>
          <Logo src={namedLogo}/>
          <Societies>
            <SocietyLink href="#!">
              <SocietyImage src={facebookIcon}/>
            </SocietyLink>
            <SocietyLink href="#!">
              <SocietyImage src={telegramIcon}/>
            </SocietyLink>
            <SocietyLink href="#!">
              <SocietyImage src={twitterIcon}/>
            </SocietyLink>
            <SocietyLink href="#!">
              <SocietyImage src={instagramIcon}/>
            </SocietyLink>
          </Societies>
        </LogoSocietiesWrapper>
      </FooterRow>
      <ContactsInfoMini>
        <Email><Icon src={footerEmailIcon}/> help@afribaggage.com</Email>
        <Address><Icon src={footerLocationIcon}/> Lagos, High street 68</Address>
        <PhoneNumber><Icon src={footerPhoneIcon}/> +234 626 623 73 26</PhoneNumber>
      </ContactsInfoMini>
    </FooterWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isWindowOpen: state.overlay.isWindowOpen
  }
}

export default connect(mapStateToProps)(GetStartedPageFooter)