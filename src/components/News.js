import React from 'react'
import { Text, Flex, Badge, Box } from 'rebass'

import NewsPreview from '../components/NewsPreview'
import Swiper from '../components/Swiper'

const Hackers = () => (
  <Flex wrap mx={-2} mb={4}>
    {/* Challenges listing */}
    <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
      <NewsPreview />
    </Box>
    <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
      <NewsPreview />
    </Box>
    <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
      <NewsPreview />
    </Box>
    <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
      <NewsPreview />
    </Box>
    <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
      <NewsPreview />
    </Box>
  </Flex>
)
export default Hackers
