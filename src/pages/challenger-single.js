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
import ChallengerInfo from '../components/ChallengerInfo'
import PrettyLink from '../components/PrettyLink'
import Challenges from '../components/Challenges'
import Hacks from '../components/Hacks'

const SingleHacker = () => (
  <Restrain>
    <PrimaryNav />
    <Box px={3}>
      <Flex wrap mx={[0, -2]} pt={3}>
        {/* Left column */}
        <Box w={[1, 1 / 2, 1 / 3]} px={[0, 2]} mb={3}>
          <Sticky top pt={[0, 3]}>
            <ChallengerInfo />
          </Sticky>
        </Box>
        {/* Right column */}
        <Box w={[1, 1 / 2, 2 / 3]} px={[0, 2]} mb={3} pt={[0, 3]}>
          <Challenges />
        </Box>
      </Flex>
    </Box>
  </Restrain>
)
export default SingleHacker
