import {
  // SHOW_HOME_PART,
  // SHOW_HOW_IT_WORKS_PART,
  SHOW_TRAVELLERS_PAGE,
  SHOW_AIR_SHARING_PAGE,
  SHOW_CONTAINER_SHARING_PAGE,
  SHOW_NEWS_EVENTS_PAGE,
  SHOW_REGION_PAGE,
  SHOW_RESOURCES_PAGE
} from '../actionTypes'

const initialState = {
  isTravellersPageActive: false,
  isAirSharingPageActive: false,
  isContainerSharingPageActive: false,
  isNewsEventsPageActive: false,
  // isHomeLinkActive: true,
  // isHowIsWorksLinkActive: false,
  isRegionPageActive: false,
  isResourcesPageActive: false,
  isSenderDescriptionActive: true,
  isTravellerDescriptionActive: false
}

export const pagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TRAVELLERS_PAGE:
      return {
        ...state,
        isTravellersPageActive: true,
        isAirSharingPageActive: false,
        isContainerSharingPageActive: false,
        isNewsEventsPageActive: false,
        isRegionPageActive: false,
        isResourcesPageActive: false
      }
    case SHOW_AIR_SHARING_PAGE:
      return {
        ...state,
        isTravellersPageActive: false,
        isAirSharingPageActive: true,
        isContainerSharingPageActive: false,
        isNewsEventsPageActive: false,
        isRegionPageActive: false,
        isResourcesPageActive: false
      }
    case SHOW_CONTAINER_SHARING_PAGE:
      return {
        ...state,
        isTravellersPageActive: false,
        isAirSharingPageActive: false,
        isContainerSharingPageActive: true,
        isNewsEventsPageActive: false,
        isRegionPageActive: false,
        isResourcesPageActive: false
      }
    case SHOW_NEWS_EVENTS_PAGE:
      return {
        ...state,
        isTravellersPageActive: false,
        isAirSharingPageActive: false,
        isContainerSharingPageActive: false,
        isNewsEventsPageActive: true,
        isRegionPageActive: false,
        isResourcesPageActive: false
      }
    case SHOW_REGION_PAGE:
      return {
        ...state,
        isTravellersPageActive: false,
        isAirSharingPageActive: false,
        isContainerSharingPageActive: false,
        isNewsEventsPageActive: false,
        isRegionPageActive: true,
        isResourcesPageActive: false
      }
    case SHOW_RESOURCES_PAGE:
      return {
        ...state,
        isTravellersPageActive: false,
        isAirSharingPageActive: false,
        isContainerSharingPageActive: false,
        isNewsEventsPageActive: false,
        isRegionPageActive: false,
        isResourcesPageActive: true
      }
    // case SHOW_HOME_PART:
    //   return {...state, isHomeLinkActive: true, isHowIsWorksLinkActive: false}
    // case SHOW_HOW_IT_WORKS_PART:
    //   return {...state, isHomeLinkActive: false, isHowIsWorksLinkActive: true}
    default:
      return state
  }
}