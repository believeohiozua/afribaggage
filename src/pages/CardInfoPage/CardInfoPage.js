import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {showItemWeightInKg, showItemWeightInLbs} from '../../redux'
import {uploadIcon, goToLastPage, userAvatar, itemImage} from 'assets'

import {
  PageWrapper,
  Header,
  GoBackButton,
  GoBackIcon,
  FromToCountriesWrapper,
  FromToCountryWrapper,
  FromToCountryFlag,
  FromToCountry,
  FromToLine,
  UserDescriptionFirstPart,
  UserInfo,
  Avatar,
  NameStatusWrapper,
  Name,
  Status,
  DateWrapper,
  Date,
  UploadButton,
  UploadIcon,
  UserDescriptionSecondPart,
  PriceWrapper,
  DescriptionMultipleItem,
  DescriptionItemWrapper,
  DescriptionItemLabel,
  DescriptionItem,
  LocationWrapper,
  ItemDescriptionWrapper,
  ItemDescriptionHeader,
  ItemDescriptionHeaderLabel,
  ItemName,
  ItemDescription,
  AmountWrapper,
  ActiveUnit,
  ExtraUnit,
  PackageLocationWrapper,
  RequirementsFromTraveller,
  RequirementsTitle,
  RequirementsContent,
  VideoSection,
  VideoWrapper,
  Video,
  VideoErrorMessageWrapper,
  VideoErrorMessage,
  BottomBtnsWrapper,
  BottomBtn,
  UserAvatarWrapper
} from './style'

const CardInfoPage = () => {
  const activePost = JSON.parse(localStorage.getItem('selectedPost'))
  const [itemWeight, setItemWeight] = useState(activePost.weight)
  const isItemWeightInKg = useSelector(({userInfo}) => userInfo.isItemWeightInKg)
  const dispatch = useDispatch()
  const history = useHistory()
  const isSenderCardSelected = activePost.userStatus === 'Sender'

  useEffect(() => {
    if (activePost.weightUnit === 'kg') {
      dispatch(showItemWeightInKg())
    } else {
      dispatch(showItemWeightInLbs())
    }
  }, [history, dispatch, activePost.weightUnit])

  const changeUnit = () => {
    if (isItemWeightInKg) {
      dispatch(showItemWeightInLbs())
      setItemWeight(Math.round((+itemWeight * 2.20462) * 100) / 100)
    } else {
      dispatch(showItemWeightInKg())
      setItemWeight(Math.round((+itemWeight / 2.20462) * 100) / 100)
    }
  }

  return (
    <PageWrapper>
      <Header>
        <GoBackButton onClick={() => history.push('/item-travellers-list')}>
          <GoBackIcon src={goToLastPage} alt=""/>
        </GoBackButton>
        <FromToCountriesWrapper>
          <FromToCountryWrapper>
            <FromToCountryFlag src={activePost.fromCountryFlag} alt=""/>
            <FromToCountry>{activePost.fromCountryName}</FromToCountry>
          </FromToCountryWrapper>
          <FromToLine/>
          <FromToCountryWrapper>
            <FromToCountryFlag src={activePost.toCountryFlag} alt=""/>
            <FromToCountry>{activePost.toCountryName}</FromToCountry>
          </FromToCountryWrapper>
        </FromToCountriesWrapper>
      </Header>
      <UserDescriptionFirstPart>
        <UserInfo>
          <Avatar
            src={userAvatar}
            alt=""
            isSenderCardSelected={isSenderCardSelected}/>
          <NameStatusWrapper>
            <Name>{activePost.userName}</Name>
            <Status>{activePost.userStatus}</Status>
          </NameStatusWrapper>
          <DateWrapper>
            {isSenderCardSelected ? 'Before' : 'Available until'}
            <Date isSenderCardSelected={isSenderCardSelected}>{activePost.date}</Date>
          </DateWrapper>
        </UserInfo>
        <UploadButton>
          <UploadIcon src={uploadIcon} alt=""/>
        </UploadButton>
      </UserDescriptionFirstPart>
      <UserDescriptionSecondPart isSenderCardSelected={isSenderCardSelected}>
        <PriceWrapper>
          <DescriptionItemWrapper>
            <DescriptionItemLabel>
              Willing to {isSenderCardSelected ? 'Pay' : 'Accept'}
            </DescriptionItemLabel>
            <DescriptionItem>
              {isSenderCardSelected ? activePost.willingToPay : activePost.willingToAccept}
            </DescriptionItem>
          </DescriptionItemWrapper>
          <DescriptionItemWrapper>
            <DescriptionItemLabel>
              {isSenderCardSelected ? 'Product Value' : 'Date of trip'}
            </DescriptionItemLabel>
            <DescriptionItem>
              {isSenderCardSelected ? activePost.productValue : activePost.fullDate}
            </DescriptionItem>
          </DescriptionItemWrapper>
        </PriceWrapper>
        <LocationWrapper>
          <DescriptionItemWrapper>
            <DescriptionItemLabel>
              {isSenderCardSelected ? 'Pick Up' : 'Travelling from'}
            </DescriptionItemLabel>
            <DescriptionMultipleItem>
              <FromToCountryFlag src={activePost.fromCountryFlag} alt=""/>
              <DescriptionItem>{activePost.fromCountryName}</DescriptionItem>
            </DescriptionMultipleItem>
          </DescriptionItemWrapper>
          <DescriptionItemWrapper>
            <DescriptionItemLabel>
              {isSenderCardSelected ? 'Deliver' : 'Going to'}
            </DescriptionItemLabel>
            <DescriptionMultipleItem>
              <FromToCountryFlag src={activePost.toCountryFlag} alt=""/>
              <DescriptionItem>{activePost.toCountryName}</DescriptionItem>
            </DescriptionMultipleItem>
          </DescriptionItemWrapper>
        </LocationWrapper>
      </UserDescriptionSecondPart>
      {isSenderCardSelected ? (
        <ItemDescriptionWrapper>
          <ItemDescriptionHeader>
            <ItemDescriptionHeaderLabel>
              Item Description <span style={{color: '#959595'}}>–</span>
            </ItemDescriptionHeaderLabel>
            <ItemName>{activePost.item}</ItemName>
          </ItemDescriptionHeader>
          <ItemDescription>
            <AmountWrapper>
              <DescriptionItemWrapper>
                <DescriptionItemLabel>Weight</DescriptionItemLabel>
                <DescriptionMultipleItem>
                  <DescriptionItem>{itemWeight}</DescriptionItem>
                  <ActiveUnit>{isItemWeightInKg ? 'kg' : 'lbs'}</ActiveUnit>
                  <ExtraUnit onClick={changeUnit}>{isItemWeightInKg ? 'lbs' : 'kg'}</ExtraUnit>
                </DescriptionMultipleItem>
              </DescriptionItemWrapper>
              <DescriptionItemWrapper>
                <DescriptionItemLabel>Quantity</DescriptionItemLabel>
                <DescriptionItem>{activePost.quantity}</DescriptionItem>
              </DescriptionItemWrapper>
            </AmountWrapper>
            <PackageLocationWrapper>
              <DescriptionItemWrapper>
                <DescriptionItemLabel>Package</DescriptionItemLabel>
                <DescriptionItem>{activePost.packaging}</DescriptionItem>
              </DescriptionItemWrapper>
              <DescriptionItemWrapper>
                <DescriptionItemLabel>Meeting location</DescriptionItemLabel>
                <DescriptionItem>{activePost.fromCountryName}</DescriptionItem>
              </DescriptionItemWrapper>
            </PackageLocationWrapper>
          </ItemDescription>
        </ItemDescriptionWrapper>
      ) : (
        <RequirementsFromTraveller>
          <RequirementsTitle>Requirements from the traveller</RequirementsTitle>
          <RequirementsContent>{activePost.requirements}</RequirementsContent>
        </RequirementsFromTraveller>
      )}
      <VideoSection>
        <VideoWrapper>
          <Video src={itemImage}/>
          <VideoErrorMessageWrapper>
            <VideoErrorMessage>
              You can’t watch the video without accepting the offer
            </VideoErrorMessage>
          </VideoErrorMessageWrapper>
          <UserAvatarWrapper>
            <Avatar
              src={userAvatar}
              alt=""
              isSenderCardSelected={isSenderCardSelected}/>
          </UserAvatarWrapper>
        </VideoWrapper>
      </VideoSection>
      <BottomBtnsWrapper>
        <BottomBtn>Make a request</BottomBtn>
        <BottomBtn>Accept offer</BottomBtn>
      </BottomBtnsWrapper>
    </PageWrapper>
  )
}

export default CardInfoPage