import {
  SHOW_TRAVELLERS_PAGE,
  SHOW_AIR_SHARING_PAGE,
  SHOW_CONTAINER_SHARING_PAGE,
  SHOW_NEWS_EVENTS_PAGE,
  SHOW_REGION_PAGE,
  SHOW_RESOURCES_PAGE,
  LEAVE_ALL_PAGES
} from '../actionTypes'

export const showTravellersPage = () => {
  return {
    type: SHOW_TRAVELLERS_PAGE
  }
}

export const showAirSharingPage = () => {
  return {
    type: SHOW_AIR_SHARING_PAGE
  }
}

export const showContainerSharingPage = () => {
  return {
    type: SHOW_CONTAINER_SHARING_PAGE
  }
}

export const showNewsEventsPage = () => {
  return {
    type: SHOW_NEWS_EVENTS_PAGE
  }
}

export const showRegionPage = () => {
  return {
    type: SHOW_REGION_PAGE
  }
}

export const showResourcesPage = () => {
  return {
    type: SHOW_RESOURCES_PAGE
  }
}

export const leaveAllPages = () => {
  return {
    type: LEAVE_ALL_PAGES
  }
}