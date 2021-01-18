import React from 'react'
import {connect} from 'react-redux'

import {
  airCargoSharing,
  airCargoSharingOrange,
  containerSharing,
  containerSharingOrange,
  newsEvents,
  newsEventsOrange,
  region,
  regionOrange,
  resources,
  resourcesOrange,
  travellersDelivery,
  travellersDeliveryOrange
} from 'assets'

import {
  showAirSharingPage,
  showContainerSharingPage,
  showNewsEventsPage,
  showRegionPage,
  showResourcesPage,
  showTravellersPage,
  hideWindowAndBackdrop
} from '../../redux'

import {
  Icon,
  ItemContentWrapper,
  ItemText,
  ItemWrapper,
  SideBarWrapper
} from './style'

const SideBar = (props) => {
  const travellersDeliveryHandler = () => {
    if (props.activePage === 'getStartedPage') {
      props.hideWindowAndBackdropCmp()
    } else {
      props.hideWindowAndBackdropCmp()
      props.showTravellersPageCmp()
    }
  }

  const airSharingHandler = () => {
    if (props.activePage === 'getStartedPage') {
      props.hideWindowAndBackdropCmp()
    } else {
      props.hideWindowAndBackdropCmp()
      props.showAirSharingPageCmp()
    }
  }

  const containerSharingHandler = () => {
    if (props.activePage === 'getStartedPage') {
      props.hideWindowAndBackdropCmp()
    } else {
      props.hideWindowAndBackdropCmp()
      props.showContainerSharingPageCmp()
    }
  }

  const newsEventsHandler = () => {
    if (props.activePage === 'getStartedPage') {
      props.hideWindowAndBackdropCmp()
    } else {
      props.hideWindowAndBackdropCmp()
      props.showNewsEventsPageCmp()
    }
  }

  const regionHandler = () => {
    if (props.activePage === 'getStartedPage') {
      props.hideWindowAndBackdropCmp()
    } else {
      props.hideWindowAndBackdropCmp()
      props.showRegionPageCmp()
    }
  }

  const resourcesHandler = () => {
    if (props.activePage === 'getStartedPage') {
      props.hideWindowAndBackdropCmp()
    } else {
      props.hideWindowAndBackdropCmp()
      props.showResourcesPageCmp()
    }
  }

  return (
    <SideBarWrapper>
      <ItemWrapper
        isActive={props.isTravellersPageActive}
        onClick={travellersDeliveryHandler}>
        <ItemContentWrapper>
          {props.isTravellersPageActive ? <Icon src={travellersDeliveryOrange}/> : <Icon src={travellersDelivery}/>}
          <ItemText isActive={props.isTravellersPageActive}>
            Travellers Delivery
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isAirSharingPageActive}
        onClick={airSharingHandler}>
        <ItemContentWrapper>
          {props.isAirSharingPageActive ? <Icon src={airCargoSharingOrange}/> : <Icon src={airCargoSharing}/>}
          <ItemText isActive={props.isAirSharingPageActive}>
            Air Cargo Sharing
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isContainerSharingPageActive}
        onClick={containerSharingHandler}>
        <ItemContentWrapper>
          {props.isContainerSharingPageActive ? <Icon src={containerSharingOrange}/> : <Icon src={containerSharing}/>}
          <ItemText isActive={props.isContainerSharingPageActive}>
            Container Sharing
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isNewsEventsPageActive}
        onClick={newsEventsHandler}>
        <ItemContentWrapper>
          {props.isNewsEventsPageActive ? <Icon src={newsEventsOrange}/> : <Icon src={newsEvents}/>}
          <ItemText isActive={props.isNewsEventsPageActive}>
            News & Events
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isRegionPageActive}
        onClick={regionHandler}>
        <ItemContentWrapper>
          {props.isRegionPageActive ? <Icon src={regionOrange}/> : <Icon src={region}/>}
          <ItemText isActive={props.isRegionPageActive}>
            Region
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isResourcesPageActive}
        onClick={resourcesHandler}>
        <ItemContentWrapper>
          {props.isResourcesPageActive ? <Icon src={resourcesOrange}/> : <Icon src={resources}/>}
          <ItemText isActive={props.isResourcesPageActive}>
            Resources
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
    </SideBarWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isTravellersPageActive: state.pages.isTravellersPageActive,
    isAirSharingPageActive: state.pages.isAirSharingPageActive,
    isContainerSharingPageActive: state.pages.isContainerSharingPageActive,
    isNewsEventsPageActive: state.pages.isNewsEventsPageActive,
    isRegionPageActive: state.pages.isRegionPageActive,
    isResourcesPageActive: state.pages.isResourcesPageActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showTravellersPageCmp: () => dispatch(showTravellersPage()),
    showAirSharingPageCmp: () => dispatch(showAirSharingPage()),
    showContainerSharingPageCmp: () => dispatch(showContainerSharingPage()),
    showNewsEventsPageCmp: () => dispatch(showNewsEventsPage()),
    showRegionPageCmp: () => dispatch(showRegionPage()),
    showResourcesPageCmp: () => dispatch(showResourcesPage()),
    hideWindowAndBackdropCmp: () => dispatch(hideWindowAndBackdrop())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)