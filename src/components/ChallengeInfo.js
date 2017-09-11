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
    <Flex justify="flex-end" mb={3} w={1}>
      <Text bold>Upcoming 🔵</Text>
    </Flex>
    <Flex mb={3} w={1} justify="center">
      <Avatar
        size={96}
        src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
      />
    </Flex>
    <Flex column align="center" w={1}>
      <Heading f={3} mb={1} is="h1">
        Challenge title
      </Heading>
      <Text mb={3}>
        Posted by: <PrettyLink>Challenger</PrettyLink>
      </Text>
    </Flex>
    <Box w={1}>
      <Text mb={3}>📅 11-13 Sep, 🗺 Sofia</Text>
      <Text bold mb={1}>
        Categories:
      </Text>
      <Text mb={3}>🚀 Rocket engineering, 👾 Technology, 👩‍⚕️ Health</Text>
      <Heading is="h2" f={1} mb={1}>
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
