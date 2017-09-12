import React from 'react'
import Link from 'gatsby-link'
import { Flex, Text, Box, Heading } from 'rebass'

import SponsorPreview from './SponsorPreview'

const Sponsors = () => (
  <Box mb={4}>
    <Heading f={3} mb={3} is="h2">
      Sponsors
    </Heading>
    <Flex wrap mx={-2}>
      <Box px={2} mb={3} w={[1, 1 / 2, 1 / 3]}>
        <SponsorPreview />
      </Box>
      <Box px={2} mb={3} w={[1, 1 / 2, 1 / 3]}>
        <SponsorPreview />
      </Box>
      <Box px={2} mb={3} w={[1, 1 / 2, 1 / 3]}>
        <SponsorPreview />
      </Box>
    </Flex>
  </Box>
)

export default Sponsors
