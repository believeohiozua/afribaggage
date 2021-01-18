import React from 'react'

import {BackdropBlock} from './style'

const Backdrop = (props) => {
  return (
    <BackdropBlock
      isBackdropVisible={props.isBackdropVisible}
      onClick={props.onClick}/>
  )
}

export default Backdrop