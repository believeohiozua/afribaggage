import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Input, Button} from 'components/UI'
import {selectLoads, selectTrips} from '../../redux'
import {checkValidity, validForm} from 'utils'
import {
  CardsFiltersFormWrapper,
  Title,
  LoadsTripsSwitcher,
  LoadsSwitcher,
  TripsSwitcher,
  Form,
  InputWrapper,
  SubmitButtonWrapper
} from './style'

const CardsFiltersForm = (props) => {
  const [controls, setControls] = useState({
    origin: {
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Fill in the field',
      rules: {
        required: true,
        minLength: 2
      }
    },
    destination: {
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Fill in the field',
      rules: {
        required: true,
        minLength: 2
      }
    }
  })

  const changeHandler = (event) => {
    const fields = {...controls}
    const {name} = event.target

    fields[name].value = event.target.value
    fields[name].isValid = checkValidity(event.target.value, fields[name].rules)

    if (fields[name].value.length === 0) {
      fields[name].errorMessage = 'Fill in the field'
    }

    if (fields[name].value.length === 1) {
      fields[name].errorMessage = 'Address is too short'
    }

    setControls(fields)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const fields = {...controls}
    const formData = {}
    const isFormValid = validForm(fields)
    Object.entries(fields).forEach(item => {
      item[1].isTouched = true

      if (isFormValid) {
        formData[item[0]] = item[1].value
        item[1].value = ''
        item[1].isValid = false
        item[1].isTouched = false
        item[1].errorMessage = 'Fill in the field'
      }
    })

    if (isFormValid) {
      console.log('FormData', formData)
    }

    setControls(fields)
  }

  return (
    <CardsFiltersFormWrapper isFiltersBlockVisible={props.isFiltersBlockVisible}>
      <Title>Searching</Title>
      <LoadsTripsSwitcher>
        <LoadsSwitcher
          areLoadsSelected={props.areLoadsSelected}
          onClick={() => props.selectLoadsCmp()}>Loads</LoadsSwitcher>
        <TripsSwitcher
          areTripsSelected={props.areTripsSelected}
          onClick={() => props.selectTripsCmp()}>Trips</TripsSwitcher>
      </LoadsTripsSwitcher>
      <Form>
        <InputWrapper>
          <Input
            name="origin"
            type="text"
            label="Origin"
            height="38px"
            hasLeftIcon
            value={controls.origin.value}
            isValid={controls.origin.isValid}
            isTouched={controls.origin.isTouched}
            placeholder="London, Air port"
            errorMessage={controls.origin.errorMessage}
            onChange={changeHandler}/>
        </InputWrapper>
        <InputWrapper>
          <Input
            name="destination"
            type="text"
            label="Destination"
            height="38px"
            hasLeftIcon
            value={controls.destination.value}
            isValid={controls.destination.isValid}
            isTouched={controls.destination.isTouched}
            placeholder="Berlin, Air port"
            errorMessage={controls.destination.errorMessage}
            onChange={changeHandler}/>
        </InputWrapper>
        <SubmitButtonWrapper>
          <Button
            btnType="primary"
            onClick={submitHandler}>
            FIND {props.areLoadsSelected ? 'LOADS' : 'TRIPS'}
          </Button>
        </SubmitButtonWrapper>
      </Form>
    </CardsFiltersFormWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    areLoadsSelected: state.filters.areLoadsSelected,
    areTripsSelected: state.filters.areTripsSelected,
    isFiltersBlockVisible: state.filters.isFiltersBlockVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectLoadsCmp: () => dispatch(selectLoads()),
    selectTripsCmp: () => dispatch(selectTrips())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsFiltersForm)