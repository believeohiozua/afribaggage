import styled from 'styled-components'

export const MakeOfferVideoPageWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`

export const Video = styled.video`
  //width: calc(100vh * (1000 / 562));    
  //height: calc(100vw * (562 / 1000));   
  min-width: 100vw;
  min-height: 100vh;
  top: 50%;
  left: 50%;
  overflow: hidden;
  //transform: translate(-50%, -50%);
`