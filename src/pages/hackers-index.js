import React from 'react'
import Link from 'gatsby-link'
import { Flex, Button, Text, Box, Heading } from 'rebass'

import HackerPreview from '../components/HackerPreview'
import ChallengePreview from '../components/ChallengePreview'
import PrimaryNav from '../components/PrimaryNav'
import Swiper from '../components/Swiper'
import HackerFilter from '../components/HackerFilter'
import Restrain from '../components/Restrain'
import Search from '../components/Search'
import Hackers from '../components/Hackers'

const ChallengesIndex = () => (
  <Restrain>
    <PrimaryNav />
    <Box px={3} pt={4}>
      {/* Title + search */}
      <Flex wrap align="center">
        <Box w={[1, 1, 2 / 3]} mb={3}>
          <Heading f={4}>Hackers</Heading>
        </Box>
        <Box w={[1, 1, 1 / 3]} mb={3}>
          <Search />
        </Box>
      </Flex>
      {/* Filter */}
      <HackerFilter />
      {/* Challenges listing */}
      <Hackers />
    </Box>
  </Restrain>
)
export default ChallengesIndex
