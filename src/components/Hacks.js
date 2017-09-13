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
import HackPreview from '../components/HackPreview'
import Agenda from '../components/Agenda'

const Hacks = () => (
  <Box mb={4}>
    <Heading f={3} mb={3} is="h2">
      Hacks
    </Heading>
    <Flex wrap mx={-2}>
      <Box w={[1, 1, 1 / 2]} px={2} mb={3}>
        <HackPreview />
      </Box>
      <Box w={[1, 1, 1 / 2]} px={2} mb={3}>
        <HackPreview />
      </Box>
      <Box w={[1, 1, 1 / 2]} px={2} mb={3}>
        <HackPreview />
      </Box>
    </Flex>
  </Box>
)

export default Hacks
