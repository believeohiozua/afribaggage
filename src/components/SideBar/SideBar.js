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
  showTravellersPage
} from '../../redux'

import {
  Icon,
  ItemContentWrapper,
  ItemText,
  ItemWrapper,
  SideBarWrapper
} from './style'

const SideBar = (props) => {
  return (
    <SideBarWrapper>
      <ItemWrapper
        isActive={props.isTravellersPageActive}
        onClick={() => props.showTravellersPageCmp()}>
        <ItemContentWrapper>
          {props.isTravellersPageActive ? <Icon src={travellersDeliveryOrange}/> : <Icon src={travellersDelivery}/>}
          <ItemText isActive={props.isTravellersPageActive}>
            Travellers Delivery
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isAirSharingPageActive}
        onClick={() => props.showAirSharingPageCmp()}>
        <ItemContentWrapper>
          {props.isAirSharingPageActive ? <Icon src={airCargoSharingOrange}/> : <Icon src={airCargoSharing}/>}
          <ItemText isActive={props.isAirSharingPageActive}>
            Air Cargo Sharing
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isContainerSharingPageActive}
        onClick={() => props.showContainerSharingPageCmp()}>
        <ItemContentWrapper>
          {props.isContainerSharingPageActive ? <Icon src={containerSharingOrange}/> : <Icon src={containerSharing}/>}
          <ItemText isActive={props.isContainerSharingPageActive}>
            Container Sharing
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isNewsEventsPageActive}
        onClick={() => props.showNewsEventsPageCmp()}>
        <ItemContentWrapper>
          {props.isNewsEventsPageActive ? <Icon src={newsEventsOrange}/> : <Icon src={newsEvents}/>}
          <ItemText isActive={props.isNewsEventsPageActive}>
            News & Events
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isRegionPageActive}
        onClick={() => props.showRegionPageCmp()}>
        <ItemContentWrapper>
          {props.isRegionPageActive ? <Icon src={regionOrange}/> : <Icon src={region}/>}
          <ItemText isActive={props.isRegionPageActive}>
            Region
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isResourcesPageActive}
        onClick={() => props.showResourcesPageCmp()}>
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
    showResourcesPageCmp: () => dispatch(showResourcesPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)