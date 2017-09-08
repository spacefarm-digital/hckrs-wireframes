import React from 'react'
import {
  Avatar,
  Heading,
  Text,
  Flex,
  Button,
  BackgroundImage,
  Circle,
} from 'rebass'
import Card from '../components/Card'

import PrettyLink from '../components/PrettyLink'

const ChallengePreview = props => (
  <Card p={3} wrap>
    <BackgroundImage ratio={1 / 1.6} src={props.image} mb={3} />
    <Flex w={1} mb={2} justify="space-between">
      <Text>
        Category: <PrettyLink>{props.category}</PrettyLink>
      </Text>
      <Text bold>{props.live ? 'Live ✅' : 'Upcoming 🕐'}</Text>
    </Flex>
    <Flex w={1} mb={2}>
      <Heading f={3}>{props.title}</Heading>
    </Flex>
    <Flex w={1} mb={2}>
      <Text bold>
        Happening in <PrettyLink>🗺 {props.location}</PrettyLink> on {''}
        {props.live ? 'now' : props.date}
      </Text>
    </Flex>
    <Text mb={3}>{props.excerpt}</Text>
    <Flex w={1} mb={2} justify="space-between" align="baseline">
      <PrettyLink block>{props.participants} joined</PrettyLink>
      <Button>See more →</Button>
    </Flex>
  </Card>
)
export default ChallengePreview
