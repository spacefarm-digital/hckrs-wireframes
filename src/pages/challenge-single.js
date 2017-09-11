import React from 'react'
import Link from 'gatsby-link'
import { Flex, Button, Text, Box, Heading } from 'rebass'

import PrimaryNav from '../components/PrimaryNav'
import Restrain from '../components/Restrain'
import ChallengeInfo from '../components/ChallengeInfo'

const ChallengesIndex = () => (
  <Restrain>
    <PrimaryNav />
    <Box px={3}>
      <Box w={[1, 1 / 1.5, 1 / 2]}>
        <ChallengeInfo />
      </Box>
    </Box>
  </Restrain>
)
export default ChallengesIndex
