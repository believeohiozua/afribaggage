import React from 'react'
import {connect} from 'react-redux'
import {britishFlag, burgerMenu, namedLogo, logo, selectLanguageIcon} from 'assets'
import {SideBar} from 'components'
import {SideDrawer} from 'components/UI'
import {Button} from 'components/UI'
import {showWindowAndBackdrop} from '../../redux'

import {
  ButtonsWrapper,
  ButtonWrapper,
  HeaderMin,
  LanguageFlag,
  LinkWrapper,
  GetStartedButton,
  Logo,
  LogoMini,
  LogoMiniWrapper,
  LogoWrapper,
  Menu,
  MenuBurger,
  MenuBurgerWrapper,
  Nav,
  NavLinks,
  GetStartedPageHeaderWrapper,
  SelectArrows,
  SelectLangWrapper,
  Language,
  HeaderMinLeft,
  HeaderMinRight
} from './style'

const GetStartedPageHeader = (props) => {
  return (
    <>
      <GetStartedPageHeaderWrapper>
        <LogoWrapper>
          <Logo src={namedLogo}/>
        </LogoWrapper>
        <Menu>
          <NavLinks>
            <LinkWrapper><Nav to="#!">BLOG</Nav></LinkWrapper>
            <LinkWrapper><Nav to="#!">CARGO</Nav></LinkWrapper>
            <LinkWrapper><Nav to="#!">TRAVELLERS</Nav></LinkWrapper>
          </NavLinks>
          <ButtonsWrapper>
            <ButtonWrapper>
              <Button
                btnType="getStarted"
                onClick={() => props.history.push('/phone-number')}>
                GET STARTED
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                btnType="secondary"
                style={{fontSize: 10}}>
                SELECT LANGUAGE
              </Button>
            </ButtonWrapper>
          </ButtonsWrapper>
        </Menu>
      </GetStartedPageHeaderWrapper>
      <HeaderMin>
        <HeaderMinLeft>
          <LogoMiniWrapper>
            <LogoMini src={logo}/>
          </LogoMiniWrapper>
          <SelectLangWrapper>
            <LanguageFlag src={britishFlag}/>
            <Language>English</Language>
            <SelectArrows src={selectLanguageIcon}/>
          </SelectLangWrapper>
        </HeaderMinLeft>
        <HeaderMinRight>
          <GetStartedButton onClick={() => props.history.push('/phone-number')}>
            GET STARTED
          </GetStartedButton>
          <MenuBurgerWrapper onClick={() => props.showWindowAndBackdropCmp()}>
            <MenuBurger src={burgerMenu}/>
          </MenuBurgerWrapper>
          <SideDrawer>
            <SideBar activePage="getStartedPage"/>
          </SideDrawer>
        </HeaderMinRight>
      </HeaderMin>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    showWindowAndBackdropCmp: () => dispatch(showWindowAndBackdrop())
  }
}

export default connect(null, mapDispatchToProps)(GetStartedPageHeader)