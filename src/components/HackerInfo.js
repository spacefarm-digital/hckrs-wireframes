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
  ButtonCircle,
} from 'rebass'

import Card from '../components/Card'
import PrettyLink from '../components/PrettyLink'
import placeholder from '../images/placeholder-avatar.jpg'

const ChallengeInfo = props => (
  <Card wrap p={3} mb={3}>
    <Flex mb={3} w={1} justify="center">
      <Avatar size={96} src={placeholder} />
    </Flex>
    <Flex column align="center" w={1}>
      <Heading f={3} mb={1} is="h1">
        Hacker Name
      </Heading>
      <Text mb={3}>
        Teams: <PrettyLink>🔴 Red team, ⚪️ White team</PrettyLink>
      </Text>
    </Flex>
    <Box w={1}>
      <Text mb={2}>
        Bio text. This will be a little bit longer, closer to a Twitter bio
      </Text>
      <Text bold mb={1}>
        Categories:
      </Text>
      <Text mb={3}>🚀 Rocket engineering, 👾 Technology, 👩‍⚕️ Health</Text>
      <Text bold mb={1}>
        Social block:
      </Text>
      <Flex mx={-1}>
        <Box px={1}>
          <ButtonCircle bg="fb">F</ButtonCircle>
        </Box>
        <Box px={1}>
          <ButtonCircle bg="twitter">T</ButtonCircle>
        </Box>
        <Box px={1}>
          <ButtonCircle bg="github">G</ButtonCircle>
        </Box>
        <Box px={1}>
          <ButtonCircle bg="grey">E</ButtonCircle>
        </Box>
      </Flex>
    </Box>
  </Card>
)
export default ChallengeInfo
