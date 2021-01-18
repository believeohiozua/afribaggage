import React from 'react'
import {SideDrawer} from 'components/UI'

import {LinksWrapper, Nav} from './style'

const RegisterLoginSideDrawer = () => {
  return (
    <SideDrawer>
      <LinksWrapper>
        <Nav to="#!">BLOG</Nav>
        <Nav to="#!">CARGO</Nav>
        <Nav to="#!">TRAVELLERS</Nav>
      </LinksWrapper>
    </SideDrawer>
  )
}

export default RegisterLoginSideDrawer