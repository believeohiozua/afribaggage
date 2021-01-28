import styled from 'styled-components'

export const SideBarWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid #D9D9D9;
  box-sizing: border-box; 
  
  &::-webkit-scrollbar {
    width: 3px;
    height: 8px;
    background-color: rgba(0, 0, 0, .1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .4);
  }
  
  @media screen and (max-width: 800px) {
    height: 55px;
    overflow-x: auto;
    border: none;
    display: flex;
    justify-content: space-between;
    
    &::-webkit-scrollbar {
      height: 1px;
    }
  }
`

export const Icon = styled.img`
  margin-right: 6px;
  
  @media screen and (max-width: 800px) {
    margin-right: 0;
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${p => p.isActive ? '#979797' : '#D9D9D9'};
  box-sizing: border-box;
  cursor: pointer;
  
  @media screen and (max-width: 800px) {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 16.7%;
    height: 55px;
    background: ${p => p.isActive ? '#ffffff' : '#EDEDED'};
    border: none;
  }
`

export const ItemContentWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 5px;
  box-sizing: border-box;
  
  @media screen and (max-width: 800px) {
    flex-direction: column;  
    padding: 0;
    align-items: center;
    justify-content: center;
  }
`

export const ItemText = styled.p`
  font-size: 8px;
  color: ${p => p.isActive ? '#141414' : '#737373'};
  font-weight: 700;
  margin-left: 6px;
  
  @media screen and (max-width: 800px) {
    margin-left: 0;
    position: absolute;
    bottom: 5px;
    color: ${p => p.isActive ? '#F05050' : '#959595'};
  }
`