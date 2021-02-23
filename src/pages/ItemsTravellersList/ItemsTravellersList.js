import React, {useEffect, useMemo} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {SideBar, PostItem, CardsFiltersForm} from 'components'
import {SideDrawer} from 'components/UI'
import data from './server'

import {
  logo,
  blueArrowDown,
  energyMenuButton,
  addNewOfferPlusIcon,
  searchIcon,
  chatIcon
} from 'assets'

import {
  hideWindowAndBackdrop,
  showWindowAndBackdrop,
  showTravellersPage,
  showFiltersBlock,
  hideFiltersBlock
} from '../../redux'

import {
  ItemsTravellersListWrapper,
  Header,
  LogoWrapper,
  Logo,
  FilterFieldWrapper,
  SearchIcon,
  SearchField,
  Filters,
  ActiveList,
  SelectArrow,
  MenuButton,
  MenuButtonIcon,
  List,
  RegisterLoginMessageWrapper,
  Message,
  Nav,
  Footer,
  MakeVideoButton,
  MakeVideoImg,
  ChatLinkWrapper,
  ChatLinkImg,
  ChatLinkLabel
} from './style'

const ItemsTravellersList = (props) => {
  const history = useHistory()

  useEffect(() => {
    localStorage.setItem('return-route', '/item-travellers-list')
  }, [])

  const filteredData = useMemo(() => {
    if (props.areLoadsSelected) {
      return data.filter(item => item.userStatus === 'Sender')
    } else {
      return data.filter(item => item.userStatus === 'Traveller')
    }
  }, [props.areLoadsSelected])

  const showHideSidebar = () => {
    if (!props.isWindowOpen) {
      props.showWindowAndBackdropCmp()
    } else {
      props.hideWindowAndBackdropCmp()
    }
  }

  return (
    <ItemsTravellersListWrapper>
      <Header>
        <LogoWrapper>
          <Logo src={logo}/>
        </LogoWrapper>
        <FilterFieldWrapper>
          <SearchIcon src={searchIcon}/>
          <SearchField
            type="text"
            placeholder="Search"/>
          <Filters>
            <ActiveList
              onClick={props.isFiltersBlockVisible ? () => props.hideFiltersBlockCmp() : () => props.showFiltersBlockCmp()}>
              {props.areLoadsSelected ? 'Loads' : 'Trips'} <SelectArrow src={blueArrowDown}/>
            </ActiveList>
          </Filters>
        </FilterFieldWrapper>
        <MenuButton
          onClick={showHideSidebar}>
          <MenuButtonIcon src={energyMenuButton}/>
        </MenuButton>
      </Header>
      <SideDrawer>
        <SideBar/>
      </SideDrawer>
      <CardsFiltersForm/>
      <List
        isWindowOpen={props.isWindowOpen}
        isRegisterLoginMessageVisible={false}>
        {filteredData ? filteredData.map(post => (
          <PostItem
            key={post.id}
            id={post.id}
            fromCountryFlag={post.fromCountryFlag}
            fromCountryName={post.fromCountryName}
            toCountryFlag={post.toCountryFlag}
            toCountryName={post.toCountryName}
            itemTravellerImage={post.itemTravellerImage}
            userAvatar={post.userAvatar}
            userName={post.userName}
            userStatus={post.userStatus}
            date={post.date}
            item={post.item}
            currentPostInfo={post}/>
        )) : null}
      </List>
      <Footer
        isWindowOpen={props.isWindowOpen}
        isRegisterLoginMessageVisible={false}>
        <ChatLinkWrapper>
          <ChatLinkImg src={chatIcon} alt=""/>
          <ChatLinkLabel>Chat</ChatLinkLabel>
        </ChatLinkWrapper>
        <MakeVideoButton onClick={() => history.push('/make-video')}>
          <MakeVideoImg src={addNewOfferPlusIcon}/>
        </MakeVideoButton>
        <div style={{width: '35px'}}/>
      </Footer>
      <RegisterLoginMessageWrapper
        isWindowOpen={props.isWindowOpen}
        isRegisterLoginMessageVisible={false}>
        <Message>
          You need to <Nav to="/phone-number">register</Nav> or <Nav to="/login-phone-number">login</Nav> to make and accept offers
        </Message>
      </RegisterLoginMessageWrapper>
    </ItemsTravellersListWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isWindowOpen: state.overlay.isWindowOpen,
    areLoadsSelected: state.filters.areLoadsSelected,
    isFiltersBlockVisible: state.filters.isFiltersBlockVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showWindowAndBackdropCmp: () => dispatch(showWindowAndBackdrop()),
    hideWindowAndBackdropCmp: () => dispatch(hideWindowAndBackdrop()),
    showTravellersPageCmp: () => dispatch(showTravellersPage()),
    showFiltersBlockCmp: () => dispatch(showFiltersBlock()),
    hideFiltersBlockCmp: () => dispatch(hideFiltersBlock())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTravellersList)