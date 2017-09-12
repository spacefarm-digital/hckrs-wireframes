import React from 'react'
import Link from 'gatsby-link'
import { Flex, Text, Box, Heading } from 'rebass'

import AdvisorPreview from './AdvisorPreview'

const Advisors = () => (
  <Box mb={4}>
    <Heading f={3} mb={3} is="h2">
      Advisors
    </Heading>
    <Flex wrap mx={-2}>
      <Box px={2} mb={3} w={[1, 1, 1 / 2]}>
        <AdvisorPreview />
      </Box>
      <Box px={2} mb={3} w={[1, 1, 1 / 2]}>
        <AdvisorPreview />
      </Box>
      <Box px={2} mb={3} w={[1, 1, 1 / 2]}>
        <AdvisorPreview />
      </Box>
    </Flex>
  </Box>
)

export default Advisors
