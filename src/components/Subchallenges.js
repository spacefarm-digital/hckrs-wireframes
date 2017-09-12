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
import Subchallenge from '../components/Subchallenge'
import Agenda from '../components/Agenda'

const Subchallenges = () => (
  <Box mb={4}>
    <Heading f={3} mb={3} is="h2">
      Subchallenges
    </Heading>
    <Subchallenge />
    <Subchallenge />
    <Subchallenge />
  </Box>
)

export default Subchallenges
