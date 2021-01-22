import React from 'react'
import {Button} from 'components/UI'
import {goToLastPage, logo} from 'assets'

import {
  AuthLayoutWrapper,
  ComeBackWrapper,
  ComeBackButton,
  ComeBackIcon,
  LogoWrapper,
  Logo,
  PageAction,
  RegisterLevelWrapper,
  RegisterLevel
} from './style'

const AuthLayout = (props) => {
  return (
    <AuthLayoutWrapper>
      <ComeBackWrapper>
        <ComeBackButton
          onClick={() => props.history.push(props.comeBackPage)}>
          <ComeBackIcon src={goToLastPage}/>
          Back
        </ComeBackButton>
      </ComeBackWrapper>
      <LogoWrapper>
        <Logo src={logo}/>
      </LogoWrapper>
      <PageAction>
        {props.pageAction}
      </PageAction>
      {props.register ? (
        <RegisterLevelWrapper>
          <RegisterLevel src={props.registerLevel}/>
        </RegisterLevelWrapper>
      ) : null}
      {props.children}
      <Button
        btnType="bottomFixed"
        onClick={props.submitHandler}>
        {props.submitAction}
      </Button>
    </AuthLayoutWrapper>
  )
}

export default AuthLayout