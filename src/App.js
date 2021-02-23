import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {
  GetStartedPage,
  ItemsTravellersList,
  CardInfoPage,
  MakeOfferVideoPage
} from 'pages'

import {
  PhoneNumber as LoginPhoneNumber,
  PhoneNumberVerification as LoginPhoneNumberVerification
} from 'pages/Login'

import {
  AvatarPassport,
  CropPhoto,
  Gender,
  Name,
  PhoneNumber,
  PhoneNumberVerification
} from 'pages/Registration'

import 'fonts.css'

const App = () => {
  return (
    <Switch>
      <Route path="/make-video" component={MakeOfferVideoPage}/>
      <Route path="/card-info" component={CardInfoPage}/>
      <Route path="/item-travellers-list" component={ItemsTravellersList}/>
      <Route path="/login-phone-number-verification" component={LoginPhoneNumberVerification}/>
      <Route path="/login-phone-number" component={LoginPhoneNumber}/>
      <Route path="/crop-photo" component={CropPhoto}/>
      <Route path="/avatar-passport" component={AvatarPassport}/>
      <Route path="/gender" component={Gender}/>
      <Route path="/name" component={Name}/>
      <Route path="/phone-number-verification" component={PhoneNumberVerification}/>
      <Route path="/phone-number" component={PhoneNumber}/>
      <Route path="/" component={GetStartedPage}/>
    </Switch>
  )
}

export default App