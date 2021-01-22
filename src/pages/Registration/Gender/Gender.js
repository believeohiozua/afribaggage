import React, {useState, useEffect} from 'react'
import {AuthLayout} from 'layouts'
import {thirdLevelOfRegistration} from 'assets'

import {GenderSelect, Option} from './style'

const Gender = (props) => {
  const [selectedItem, setSelectedItem] = useState('male')

  useEffect(() => {
    const registrationData = JSON.parse(localStorage.getItem('registrationData'))
    if (!registrationData) {
      props.history.push('/phone-number')
    }
  })

  const changeHandler = () => {
    if (selectedItem === 'male') {
      setSelectedItem('female')
    } else {
      setSelectedItem('male')
    }
  }

  const submitHandler = () => {
    const registrationData = JSON.parse(localStorage.getItem('registrationData'))
    registrationData.gender = selectedItem
    localStorage.setItem('registrationData', JSON.stringify(registrationData))

    props.history.push('/avatar-passport')
  }

  return (
    <AuthLayout
      history={props.history}
      register
      pageAction="Registration"
      registerLevel={thirdLevelOfRegistration}
      comeBackPage="/name"
      submitAction="continue"
      submitHandler={submitHandler}>
      <GenderSelect
        selectedItem={selectedItem}
        onChange={changeHandler}>
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
      </GenderSelect>
    </AuthLayout>
  )
}

export default Gender