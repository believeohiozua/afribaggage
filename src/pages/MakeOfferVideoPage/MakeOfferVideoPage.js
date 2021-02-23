import React, {useEffect, useRef} from 'react'

import {MakeOfferVideoPageWrapper, Video} from './style'

const MakeOfferVideoPage = () => {
  const video = useRef(null)

  useEffect(() => {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.current.srcObject = stream
        video.current.play()
      })
    }

    return () => {
      // video.current.srcObject = {}
    }
  }, [])

  return (
    <MakeOfferVideoPageWrapper>
      <Video ref={video} id="video" autoPlay/>
      {/*<button id="snap">Сделать снимок</button>*/}
      {/*<canvas id="canvas" style={{width: '100vw', height: '100vh'}}/>*/}
    </MakeOfferVideoPageWrapper>
  )
}

export default MakeOfferVideoPage