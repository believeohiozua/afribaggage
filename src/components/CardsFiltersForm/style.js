import styled from 'styled-components'

export const CardsFiltersFormWrapper = styled.div`
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  background: #ffffff;
  padding: 20px 8%;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, .02);
  border-radius: 0 0 8px 8px;
  z-index: 999;
  transform: ${p => p.isFiltersBlockVisible ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform .7s;
`

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 17px;
`

export const LoadsTripsSwitcher = styled.div`
  display: flex;
  border: 1px solid #8DADFF;
  border-radius: 5px;
  margin-bottom: 14px;
`

export const LoadsSwitcher = styled.div`
  width: 50%;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => p.areLoadsSelected ? '#82A5FF' : '#DBE5FF'};
  color: ${p => p.areLoadsSelected ? '#ffffff' : '#8DADFF'};
`

export const TripsSwitcher = styled.div`
  width: 50%;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => p.areTripsSelected ? '#82A5FF' : '#DBE5FF'};
  color: ${p => p.areTripsSelected ? '#ffffff' : '#8DADFF'};
`

export const Form = styled.form``

export const InputWrapper = styled.div`
  :first-of-type {
    margin-bottom: 5px;  
  }
`

export const SubmitButtonWrapper = styled.div`
  height: 38px; 
  margin-top: 24px; 
`