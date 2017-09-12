import React from 'react'
import Link from 'gatsby-link'
import {
  Flex,
  Button,
  Text,
  Box,
  Heading,
  Image,
  Embed,
  Divider,
  Sticky,
  Panel,
  PanelHeader,
  PanelFooter,
  Arrow,
} from 'rebass'

import PrimaryNav from '../components/PrimaryNav'
import Card from '../components/Card'
import Restrain from '../components/Restrain'
import ChallengeInfo from '../components/ChallengeInfo'
import Description from '../components/Description'
import PrettyLink from '../components/PrettyLink'
import Subchallenges from '../components/Subchallenges'
import Agenda from '../components/Agenda'
import Advisors from '../components/Advisors'
import Participants from '../components/Participants'
import Sponsors from '../components/Sponsors'

const ChallengesIndex = () => (
  <Restrain>
    <PrimaryNav />
    <Box px={3}>
      <Flex wrap mx={[0, -2]} pt={3}>
        {/* Left column */}
        <Box w={[1, 1 / 2, 1 / 3]} px={[0, 2]} mb={3}>
          <Sticky top pt={[0, 3]}>
            <ChallengeInfo />
          </Sticky>
        </Box>
        {/* Right column */}
        <Box w={[1, 1 / 2, 2 / 3]} px={[0, 2]} mb={3} pt={[0, 3]}>
          <Description />
          <Subchallenges />
          <Agenda />
          <Advisors />
          <Participants />
          <Sponsors />
        </Box>
      </Flex>
    </Box>
  </Restrain>
)
export default ChallengesIndex
