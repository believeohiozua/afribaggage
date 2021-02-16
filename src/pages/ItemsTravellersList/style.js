import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ItemsTravellersListWrapper = styled.div``

export const Header = styled.div`
  height: 65px; 
  display: flex;   
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 4%;
  position: fixed;
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, .02);
  z-index: 9999;
`

export const LogoWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: #F5F5F5;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  width: 26px;
  height: 16.25px;
`

export const FilterFieldWrapper = styled.div`
  width: 65%;
  position: relative;
`

export const SearchIcon = styled.img`
  width: 16px;  
  height: 16px; 
  position: absolute;
  top: 29%;
  left: 14px;
`

export const SearchField = styled.input`
  height: 36px; 
  width: 100%;
  padding: 0 80px 0 37px;
  font-size: 16px;
  border: 1px solid #D8D8D8;
  border-radius: 18px;
  box-sizing: border-box;
  
  &::placeholder {
    color: #D8D8D8;
  }
`

export const Filters = styled.div``

export const ActiveList = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #739AFF;
  position: absolute;
  top: 22%;
  right: 14px;
`

export const SelectArrow = styled.img`
  margin-left: 7px;
`

export const MenuButton = styled.button`
  background: none;
  border: none;
`

export const MenuButtonIcon = styled.img`
  width: 18px;
  height: 20px;
`

export const List = styled.div`
  padding: 84px 4% calc(80px ${p => p.isWindowOpen ? '+ 55px' : ''});
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto; 
  overflow-y: auto;
  transition: height .5s;
`

export const RegisterLoginMessageWrapper = styled.div`
  display: ${p => !p.isRegisterLoginMessageVisible ? 'none' : 'flex'};
  background: #F05050;
  height: 65px;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: ${p => p.isWindowOpen ? '55px' : 0};
  left: 0;
  right: 0;
  transition: bottom .5s;
`

export const Message = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  color: #FFC2C2;
  margin: 0 4%;
`

export const Nav = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`

export const Footer = styled.div`
  position: fixed;
  padding: 20px 4%;
  left: 0;
  right: 0;
  bottom: ${p => p.isWindowOpen ? '55px' : 0};
  transition: bottom .5s;
  display: ${p => p.isRegisterLoginMessageVisible ? 'none' : 'flex'};
  height: 100px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`

export const ChatLinkWrapper = styled.div`
  text-align: center;
`

export const ChatLinkImg = styled.img`
  width: 25px;
  height: 25px;
  background: #ffffff;
  border-radius: 5px;
`

export const ChatLinkLabel = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  background: #ffffff;
  border-radius: 50%;
`

export const MakeVideoButton = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  background: #ffffff; 
`

export const MakeVideoImg = styled.img`
  width: 60px; 
  height: 60px;
`