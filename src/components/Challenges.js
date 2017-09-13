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
import ChallengePreview from '../components/ChallengePreview'
import Agenda from '../components/Agenda'

const Challenges = () => (
  <Box mb={4}>
    <Heading f={3} mb={3} is="h2">
      Challenges
    </Heading>
    <Flex wrap mx={-2}>
      <Box w={[1, 1, 1 / 2]} px={2} mb={3}>
        <ChallengePreview />
      </Box>
      <Box w={[1, 1, 1 / 2]} px={2} mb={3}>
        <ChallengePreview />
      </Box>
      <Box w={[1, 1, 1 / 2]} px={2} mb={3}>
        <ChallengePreview />
      </Box>
    </Flex>
  </Box>
)

export default Challenges
