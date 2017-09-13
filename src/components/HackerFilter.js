import React from 'react'
import { Text, Flex, Badge } from 'rebass'

import HackerPreview from '../components/HackerPreview'
import Swiper from '../components/Swiper'

const Filter = () => (
  <Flex align="baseline" wrap mb={2}>
    <Text pr={2}>Showing</Text>
    <Badge px={2} f={1} mb={3} bold bg="grey" color="black">
      ✅ Recently active
    </Badge>
    <Text px={2} f={1}>
      hackers located
    </Text>
    <Badge px={2} f={1} mb={3} bold bg="grey" color="black">
      🗺 50km away
    </Badge>
    <Text px={2}>interested in</Text>
    <Badge px={2} f={1} mb={3} bold bg="grey" color="black">
      All categories
    </Badge>
  </Flex>
)
export default Filter
