import React from 'react'
import { Text, Flex, Badge } from 'rebass'

import HackerPreview from '../components/HackerPreview'
import Swiper from '../components/Swiper'
import SingleLine from '../components/SingleLine'

const Filter = () => (
  <Swiper is="nav">
    <SingleLine p={3} align="baseline">
      <Text pr={2}>Showing</Text>
      <Badge px={2} bold bg="grey" color="black">
        ⏳ Upcoming
      </Badge>
      <Text px={2}>events happening</Text>
      <Badge px={2} bold bg="grey" color="black">
        🗺 50km away
      </Badge>
      <Text px={2}>in</Text>
      <Badge px={2} bold bg="grey" color="black">
        All categories
      </Badge>
    </SingleLine>
  </Swiper>
)
export default Filter
