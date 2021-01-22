import styled from 'styled-components'
import {selectArrows} from 'assets'

export const GenderSelect = styled.select`
  height: 45px;
  width: 100%;
  display: inline-block;
  padding: 10px 24px;
  font-size: 18px;
  color: #C7CFD3;
  border: 1px solid #C6D2DE;
  box-sizing: border-box;
  border-radius: 8px;
  appearance: none;
  background: url('${selectArrows}') no-repeat ${p => p.selectedItem === 'male' ? '64px' : '84px'} 50%;
`

export const Option = styled.option``