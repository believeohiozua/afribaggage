import React from 'react'
import {ratingStar, user1, user2, user3} from 'assets'

import {
  WhoUseAfribaggageWrapper,
  WhoUseAfribaggagePhotos,
  UserAvatarWrapper,
  Avatar,
  StatisticWrapper,
  RatingStarsWrapper,
  RatingStar,
  UsersAmount,
  CompanyName
} from './style'

const GetStartedPageStatistic = () => {
  return (
    <WhoUseAfribaggageWrapper>
      <WhoUseAfribaggagePhotos>
        <UserAvatarWrapper>
          <Avatar src={user1}/>
        </UserAvatarWrapper>
        <UserAvatarWrapper>
          <Avatar src={user2}/>
        </UserAvatarWrapper>
        <UserAvatarWrapper>
          <Avatar src={user3}/>
        </UserAvatarWrapper>
      </WhoUseAfribaggagePhotos>
      <StatisticWrapper>
        <RatingStarsWrapper>
          <RatingStar src={ratingStar}/>
          <RatingStar src={ratingStar}/>
          <RatingStar src={ratingStar}/>
          <RatingStar src={ratingStar}/>
          <RatingStar src={ratingStar}/>
        </RatingStarsWrapper>
        <UsersAmount>
          254+ users already use <CompanyName>Afribaggage</CompanyName>
        </UsersAmount>
      </StatisticWrapper>
    </WhoUseAfribaggageWrapper>
  )
}

export default GetStartedPageStatistic