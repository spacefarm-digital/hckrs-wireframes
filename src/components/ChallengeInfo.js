import React from 'react'
import {
  Avatar,
  Heading,
  Text,
  Flex,
  Button,
  BackgroundImage,
  Circle,
  Box,
} from 'rebass'

import Card from '../components/Card'
import PrettyLink from '../components/PrettyLink'

const ChallengeInfo = props => (
  <Card wrap p={3}>
    <Flex justify="space-between" mb={3} w={1}>
      <Text bold>📅 11-13 Sep</Text>
      <Text bold>Upcoming 🔵</Text>
    </Flex>
    <Flex mb={3} w={1}>
      <Avatar
        size={72}
        src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
        mr={3}
      />
      <Box>
        <Heading f={3} mb={1} is="h1">
          Challenge title
        </Heading>
        <Text>
          Posted by: <PrettyLink>Challenger</PrettyLink>
        </Text>
      </Box>
    </Flex>
    <Box w={1}>
      <Flex w={1} mb={3} justify="space-between">
        <Text>🗺 Sofia</Text>
        <Text>🚀 Rocket engineering</Text>
      </Flex>
      <Heading is="h2" f={1} mb={2}>
        Prizes:
      </Heading>
      <ul>
        <Text is="li">🥇 $5000 + advisor support</Text>
        <Text is="li">🥈 $2500 + advisor support</Text>
        <Text is="li">🥉 $1000</Text>
      </ul>
    </Box>
  </Card>
)
export default ChallengeInfo
