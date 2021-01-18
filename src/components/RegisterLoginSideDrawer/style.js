import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinksWrapper = styled.div`
  padding: 30px 20px;
  box-sizing: border-box;
`

export const Nav = styled(Link)`
  display: block;
  width: 100%; 
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: #565656;
  margin-bottom: 15px;
  
  &:active {
    text-decoration: underline;
  }
`