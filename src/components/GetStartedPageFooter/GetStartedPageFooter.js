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
  footerPhoneIcon,
  telegramIconOrange,
  facebookIconOrange,
  twitterIconOrange,
  instagramIconOrange,
  linkedInIconOrange
} from 'assets'

import {
  FooterWrapper,
  LinksContactsWrapper,
  LinksWrapper,
  FirstLinksPart,
  CompanyInfoLink as Link,
  SecondLinksPart,
  ContactsWrapper,
  ContactWrapper,
  ContactIcon,
  ContactValue,
  CompanyInfoMessage,
  LogoSocialLinksWrapper,
  LogoWrapper,
  Logo,
  SocialLinksWrapper,
  SocialLink,
  SocialLinkIcon,
  SocialLinksWrapperMini,
  SocialLinkMini,
  SocialLinkIconMini
} from './style'

const GetStartedPageFooter = (props) => {
  return (
    <FooterWrapper isWindowOpen={props.isWindowOpen}>
      <LinksContactsWrapper>
        <LinksWrapper>
          <FirstLinksPart>
            <Link to="#!">About</Link>
            <Link to="#!">Contact us</Link>
            <Link to="#!">Resources</Link>
          </FirstLinksPart>
          <SecondLinksPart>
            <Link to="#!">Transport</Link>
            <Link to="#!">Advertises</Link>
            <Link to="#!">Terms of Use</Link>
          </SecondLinksPart>
        </LinksWrapper>
        <ContactsWrapper>
          <ContactWrapper>
            <ContactIcon src={footerPhoneIcon} alt=""/>
            <ContactValue>+234 626 623 73 26</ContactValue>
          </ContactWrapper>
          <ContactWrapper>
            <ContactIcon src={footerEmailIcon} alt=""/>
            <ContactValue>help@afribaggage.com</ContactValue>
          </ContactWrapper>
          <ContactWrapper>
            <ContactIcon src={footerLocationIcon} alt=""/>
            <ContactValue>MaryLand 100211</ContactValue>
          </ContactWrapper>
        </ContactsWrapper>
      </LinksContactsWrapper>
      <CompanyInfoMessage>
        Afribaggage is a solution provider helping improve international shipping through technological innovations and providing earning opportunities for travelers / carriers .
      </CompanyInfoMessage>
      <LogoSocialLinksWrapper>
        <LogoWrapper>
          <Logo src={namedLogo} alt=""/>
        </LogoWrapper>
        <SocialLinksWrapper>
          <SocialLink to="#!">
            <SocialLinkIcon src={telegramIconOrange} alt=""/>
          </SocialLink>
          <SocialLink to="#!">
            <SocialLinkIcon src={facebookIconOrange} alt=""/>
          </SocialLink>
          <SocialLink to="#!">
            <SocialLinkIcon src={twitterIconOrange} alt=""/>
          </SocialLink>
          <SocialLink to="#!">
            <SocialLinkIcon src={instagramIconOrange} alt=""/>
          </SocialLink>
          <SocialLink to="#!">
            <SocialLinkIcon src={linkedInIconOrange} alt=""/>
          </SocialLink>
        </SocialLinksWrapper>
        <SocialLinksWrapperMini>
          <SocialLinkMini to="#!">
            <SocialLinkIconMini src={facebookIcon} alt=""/>
          </SocialLinkMini>
          <SocialLinkMini to="#!">
            <SocialLinkIconMini src={telegramIcon} alt=""/>
          </SocialLinkMini>
          <SocialLinkMini to="#!">
            <SocialLinkIconMini src={twitterIcon} alt=""/>
          </SocialLinkMini>
          <SocialLinkMini to="#!">
            <SocialLinkIconMini src={instagramIcon} alt=""/>
          </SocialLinkMini>
        </SocialLinksWrapperMini>
      </LogoSocialLinksWrapper>
    </FooterWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isWindowOpen: state.overlay.isWindowOpen
  }
}

export default connect(mapStateToProps)(GetStartedPageFooter)