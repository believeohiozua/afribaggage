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
  transform: ${p => p.isWindowOpen ? 'translate(0)' : 'translate(-102%)'};
  transition: .5s;
  
  &::-webkit-scrollbar {
    width: 3px;
    height: 8px;
    background-color: rgba(0, 0, 0, .1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .4);
  }
`