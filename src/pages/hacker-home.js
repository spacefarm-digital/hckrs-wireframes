import React from 'react'
import { Flex, Heading, Box } from 'rebass'
import PrimaryNavLogged from '../components/PrimaryNavLogged'
import ChallengePreview from '../components/ChallengePreview'
import ChallengeUpdates from '../components/ChallengeUpdates'
import News from '../components/News'
import Restrain from '../components/Restrain'

const HackerHome = () => (
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
      {/* Challenges */}
      <Box is="section">
        <Heading f={3} mb={3} is="h2">
          Suggested challenges
        </Heading>
        <Flex wrap mx={-2} mb={4}>
          {/* Challenges listing */}
          <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
            <ChallengePreview />
          </Box>
          <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
            <ChallengePreview />
          </Box>
          <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
            <ChallengePreview />
          </Box>
          <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
            <ChallengePreview />
          </Box>
          <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
            <ChallengePreview />
          </Box>
        </Flex>
      </Box>
      {/* News */}
      <Heading f={3} mb={3} is="h2">
        News
      </Heading>
      <News />
    </Restrain>
  </div>
)
export default HackerHome
