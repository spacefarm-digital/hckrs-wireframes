import React from 'react'
import { Text, Flex, Badge } from 'rebass'

import HackerPreview from '../components/HackerPreview'
import Swiper from '../components/Swiper'

const Filter = () => (
  <Flex px={3} align="baseline" wrap>
    <Text pr={2}>Showing</Text>
    <Badge px={2} f={1} mb={3} bold bg="grey" color="black">
      ⏳ Upcoming
    </Badge>
    <Text px={2} f={1}>
      events happening
    </Text>
    <Badge px={2} f={1} mb={3} bold bg="grey" color="black">
      🗺 50km away
    </Badge>
    <Text px={2}>in</Text>
    <Badge px={2} f={1} mb={3} bold bg="grey" color="black">
      All categories
    </Badge>
  </Flex>
)
export default Filter
