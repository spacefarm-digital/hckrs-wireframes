import React from 'react'
import { Flex, Heading, Box } from 'rebass'
import PrimaryNavLogged from '../components/PrimaryNavLogged'
import ChallengePreview from '../components/ChallengePreview'
import ChallengeUpdates from '../components/ChallengeUpdates'
import HackPreview from '../components/HackPreview'
import News from '../components/News'
import Restrain from '../components/Restrain'
import Swiper from '../components/Swiper'
import TimeSlotRequest from '../components/TimeSlotRequest'

const ChallengerHome = () => (
  <div>
    <PrimaryNavLogged />
    <Restrain pt={3} px={3}>
      {/* Unattended time slots */}
      <Heading f={3} mb={3} is="h2">
        Unattended time slots
      </Heading>
      <Flex mx={-2} mb={4} wrap>
        <Box px={2} w={[1, 1 / 2, 1 / 3]} mb={3}>
          <TimeSlotRequest />
        </Box>
        <Box px={2} w={[1, 1 / 2, 1 / 3]} mb={3}>
          <TimeSlotRequest />
        </Box>
      </Flex>
      {/* News */}
      <Heading f={3} mb={3} is="h2">
        News
      </Heading>
      <News />
    </Restrain>
  </div>
)
export default ChallengerHome
