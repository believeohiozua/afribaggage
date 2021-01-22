import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GetStartedPageHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  position: fixed;
  top: 0;
  left: 4.5%;
  right: 4.5%;
  z-index: 9999;
  background: #ffffff;
  border-radius: 0 0 16px 16px;
  padding: 0 30px;
  box-sizing: border-box;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.02);
  
  @media screen and (max-width: 700px) {
    display: none; 
  }
`

export const LogoWrapper = styled.div`
  width: 67px;
  height: 40px;
  cursor: pointer;
`

export const Logo = styled.img`
  width: 100%;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`

export const NavLinks = styled.div`
  display: flex;
`

export const LinkWrapper = styled.div`
  margin-left: 25px;
`

export const Nav = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: #565656;
  
  &:hover {
    text-decoration: underline;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
`

export const ButtonWrapper = styled.div`
  height: 30px;
  margin-left: 25px;
`

export const HeaderMin = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.02);
  padding: 15px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (min-width: 701px) {
    display: none; 
  }
`

export const MenuBurgerWrapper = styled.div``

export const MenuBurger = styled.img``

export const LogoMiniWrapper = styled.div`
  width: 40px;  
  height: 40px;
  border-radius: 50%;
  background: #F5F5F5;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  
  @media screen and (max-width: 350px) {
    margin-right: 15px;
  }
`

export const LogoMini = styled.img`
  width: 26px;
`

export const SelectLangWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  
  @media screen and (max-width: 340px) {
    margin-right: 5px;
  }
`

export const LanguageFlag = styled.img``

export const Language = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-left: 5px;
`

export const SelectArrows = styled.img``

export const GetStartedButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #F05050;
  cursor: pointer; 
  margin-right: 22px;
  
  @media screen and (max-width: 350px) {
    margin-right: 15px;
  }
`

export const HeaderMinLeft = styled.div`
  display: flex;
`

export const HeaderMinRight = styled.div`
  display: flex;
`