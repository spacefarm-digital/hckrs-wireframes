import React from 'react'
import { Flex, Heading, Box } from 'rebass'
import PrimaryNavLogged from '../components/PrimaryNavLogged'
import ChallengePreview from '../components/ChallengePreview'
import ChallengeUpdates from '../components/ChallengeUpdates'
import HackPreview from '../components/HackPreview'
import News from '../components/News'
import Restrain from '../components/Restrain'
import Swiper from '../components/Swiper'
import HackerCompactPreview from '../components/HackerCompactPreview'

const ChallengerHome = () => (
  <div>
    <PrimaryNavLogged />
    <Restrain pt={3} px={3}>
      {/* Active challenges */}
      <Heading f={3} mb={3} is="h2">
        Since you were away...
      </Heading>
      <Flex mx={-2} mb={4} wrap>
        <Box px={2} w={[1, 1 / 2, 1 / 3]} mb={3}>
          <ChallengeUpdates />
        </Box>
        <Box px={2} w={[1, 1 / 2, 1 / 3]} mb={3}>
          <ChallengeUpdates />
        </Box>
      </Flex>
      {/* News hacks */}
      <Heading f={3} mb={3} is="h2">
        New hacks
      </Heading>
      <Flex mx={-2} mb={4} wrap>
        <Box px={2} w={[1, 1 / 2, 1 / 3]} mb={3}>
          <HackPreview />
        </Box>
        <Box px={2} w={[1, 1 / 2, 1 / 3]} mb={3}>
          <HackPreview />
        </Box>
      </Flex>
      <Box is="section">
        <Heading f={3} mb={3} is="h2" px={3}>
          Suggested hackers
        </Heading>
        <Swiper pb={2} mb={4}>
          <Flex>
            <Box pr={2} pl={3}>
              <HackerCompactPreview />
            </Box>
            <Box px={2}>
              <HackerCompactPreview />
            </Box>
            <Box px={2}>
              <HackerCompactPreview />
            </Box>
            <Box px={2}>
              <HackerCompactPreview />
            </Box>
            <Box px={2}>
              <HackerCompactPreview />
            </Box>
            <Box px={2}>
              <HackerCompactPreview />
            </Box>
            <Box px={2}>
              <HackerCompactPreview />
            </Box>
            <Box pl={2} pr={3}>
              <HackerCompactPreview />
            </Box>
          </Flex>
        </Swiper>
      </Box>
      {/* News */}
      <Heading f={3} mb={3} is="h2">
        News
      </Heading>
      <News />
    </Restrain>
  </div>
)
export default ChallengerHome
