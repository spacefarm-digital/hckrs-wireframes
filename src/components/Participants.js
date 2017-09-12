import React from 'react'
import Link from 'gatsby-link'
import { Flex, Text, Box, Heading } from 'rebass'

import HackerPreview from './HackerPreview'

const Participants = () => (
  <Box mb={4}>
    <Heading f={3} mb={3} is="h2">
      Participants
    </Heading>
    <Flex wrap mx={-2}>
      <Box px={2} mb={3} w={[1, 1, 1 / 2]}>
        <HackerPreview />
      </Box>
      <Box px={2} mb={3} w={[1, 1, 1 / 2]}>
        <HackerPreview />
      </Box>
      <Box px={2} mb={3} w={[1, 1, 1 / 2]}>
        <HackerPreview />
      </Box>
    </Flex>
  </Box>
)

export default Participants
