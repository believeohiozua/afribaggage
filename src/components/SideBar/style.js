import styled from 'styled-components'

export const SideBarWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid #D9D9D9;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  
  &::-webkit-scrollbar {
    width: 3px;
    height: 8px;
    background-color: rgba(0, 0, 0, .1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .4);
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  height: 90px;
  justify-content: center;
  align-items: center; 
  border-bottom: 1px solid #D9D9D9;
  box-sizing: border-box;
`

export const HeaderLogo = styled.img``

export const Icon = styled.img`
  margin-right: 6px;
`

export const ItemWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${p => p.isActive ? '#979797' : '#D9D9D9'};
  box-sizing: border-box;
  cursor: pointer;
`

export const ItemContentWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 5px;
  box-sizing: border-box;
`

export const TravellersDeliveryWrapper = styled.div`
  margin: 10px 0;
`

export const TravellersDeliveryText = styled.p`
  font-size: 11px;
  color: #5b5b5b;
  font-weight: 700;
`

export const ItemText = styled.p`
  font-size: 10px;
  color: ${p => p.isActive ? '#141414' : '#737373'};
  font-weight: 700;
  margin-left: 6px;
`