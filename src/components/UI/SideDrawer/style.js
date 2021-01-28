import styled from 'styled-components'

export const SideDrawerWrapper = styled.div`
  width: 200px;
  height: 100vh;
  overflow: auto;
  background: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, .7);
  z-index: 99999;
  transform: ${p => p.isWindowOpen ? 'translateY(0)' : 'translateY(104%)'};
  transition: .5s;
  
  &::-webkit-scrollbar {
    width: 3px;
    height: 8px;
    background-color: rgba(0, 0, 0, .1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .4);
  }
  
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 55px;
    bottom: 0;  
    left: 0;
    right: 0;
    top: auto;
    overflow-y: hidden;
    
    &::-webkit-scrollbar {
      height: 2px;
    }
  }
`