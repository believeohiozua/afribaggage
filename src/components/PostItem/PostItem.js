import React from 'react'
import {useHistory} from 'react-router-dom'

import {fromToOrangeIcon, safeBlueIcon, calendarOrangeIcon} from 'assets'

import {
  PostItemWrapper,
  PostItemFirstSection,
  FromToWrapper,
  FromToLine,
  FromToLineImg,
  FromToCountries,
  FromToCountry,
  FromToCountryFlag,
  FromToCountryName,
  SafeWatermarkWrapper,
  SafeWatermarkImg,
  SafeWatermarkLabel,
  PostItemSecondSection,
  UserInfoWrapper,
  UserAvatarWrapper,
  UserAvatar,
  UserNameStatusWrapper,
  UserName,
  UserStatus,
  ItemDateWrapper,
  DateWrapper,
  CalendarIcon,
  Date,
  Item
} from './style'

const PostItem = (props) => {
  const history = useHistory()

  const showPostItemInfo = () => {
    localStorage.setItem('selectedPost', JSON.stringify(props.currentPostInfo))
    history.push('/card-info')
  }

  return (
    <PostItemWrapper id={props.id} onClick={showPostItemInfo}>
      <PostItemFirstSection>
        <FromToWrapper>
          <FromToLine>
            <FromToLineImg src={fromToOrangeIcon} alt=""/>
          </FromToLine>
          <FromToCountries>
            <FromToCountry>
              <FromToCountryFlag src={props.fromCountryFlag} alt=""/>
              <FromToCountryName>{props.fromCountryName}</FromToCountryName>
            </FromToCountry>
            <FromToCountry>
              <FromToCountryFlag src={props.toCountryFlag} alt=""/>
              <FromToCountryName>{props.toCountryName}</FromToCountryName>
            </FromToCountry>
          </FromToCountries>
        </FromToWrapper>
        <SafeWatermarkWrapper>
          <SafeWatermarkImg src={safeBlueIcon} alt=""/>
          <SafeWatermarkLabel>safe</SafeWatermarkLabel>
        </SafeWatermarkWrapper>
      </PostItemFirstSection>
      <PostItemSecondSection>
        <UserInfoWrapper>
          <UserAvatarWrapper>
            <UserAvatar
              userStatus={props.userStatus}
              src={props.userAvatar}
              alt=""/>
            </UserAvatarWrapper>
          <UserNameStatusWrapper>
            <UserName>{props.userName}</UserName>
            <UserStatus>{props.userStatus}</UserStatus>
          </UserNameStatusWrapper>
        </UserInfoWrapper>
        <ItemDateWrapper>
          {props.date ? (
            <DateWrapper>
              <CalendarIcon src={calendarOrangeIcon} alt=""/>
              <Date>{props.date}</Date>
            </DateWrapper>
          ) : <Item>{props.item}</Item>}
        </ItemDateWrapper>
      </PostItemSecondSection>
    </PostItemWrapper>
  )
}

export default PostItem