import React from 'react'
import {connect} from 'react-redux'
import {Backdrop} from 'components/UI/index'
import {hideWindowAndBackdrop} from '../../../redux/index'

import {SideDrawerWrapper} from './style'

const SideDrawer = (props) => {
  return (
    <>
      <Backdrop
        isBackdropVisible={props.isBackdropVisible}
        onClick={() => props.hideWindowAndBackdropCmp()}/>
      <SideDrawerWrapper isWindowOpen={props.isWindowOpen}>
        {props.children}
      </SideDrawerWrapper>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isWindowOpen: state.overlay.isWindowOpen,
    isBackdropVisible: state.overlay.isBackdropVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideWindowAndBackdropCmp: () => dispatch(hideWindowAndBackdrop())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)