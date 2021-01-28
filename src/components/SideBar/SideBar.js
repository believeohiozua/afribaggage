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
  const travellersDeliveryHandler = () => {
    props.showTravellersPageCmp()
  }

  const airSharingHandler = () => {
    props.showAirSharingPageCmp()
  }

  const containerSharingHandler = () => {
    props.showContainerSharingPageCmp()
  }

  const newsEventsHandler = () => {
    props.showNewsEventsPageCmp()
  }

  const regionHandler = () => {
    props.showRegionPageCmp()
  }

  const resourcesHandler = () => {
    props.showResourcesPageCmp()
  }

  return (
    <SideBarWrapper>
      <ItemWrapper
        isActive={props.isTravellersPageActive}
        onClick={travellersDeliveryHandler}>
        <ItemContentWrapper>
          {props.isTravellersPageActive ? <Icon src={travellersDeliveryOrange}/> : <Icon src={travellersDelivery}/>}
          <ItemText isActive={props.isTravellersPageActive}>
            Travellers
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isAirSharingPageActive}
        onClick={airSharingHandler}>
        <ItemContentWrapper>
          {props.isAirSharingPageActive ? <Icon src={airCargoSharingOrange}/> : <Icon src={airCargoSharing}/>}
          <ItemText isActive={props.isAirSharingPageActive}>
            Air Cargo
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isContainerSharingPageActive}
        onClick={containerSharingHandler}>
        <ItemContentWrapper>
          {props.isContainerSharingPageActive ? <Icon src={containerSharingOrange}/> : <Icon src={containerSharing}/>}
          <ItemText isActive={props.isContainerSharingPageActive}>
            Container
          </ItemText>
        </ItemContentWrapper>
      </ItemWrapper>
      <ItemWrapper
        isActive={props.isNewsEventsPageActive}
        onClick={newsEventsHandler}>
        <ItemContentWrapper>
          {props.isNewsEventsPageActive ? <Icon src={newsEventsOrange}/> : <Icon src={newsEvents}/>}
          <ItemText isActive={props.isNewsEventsPageActive}>
            News
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
    showResourcesPageCmp: () => dispatch(showResourcesPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)