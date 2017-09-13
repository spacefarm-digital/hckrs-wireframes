import React from 'react'
import {
  Avatar,
  Heading,
  Text,
  Flex,
  BackgroundImage,
  Circle,
  Image,
} from 'rebass'
import Card from '../components/Card'

import PrettyLink from '../components/PrettyLink'
import ButtonLink from '../components/ButtonLink'

import placeholder from '../images/placeholder-object.jpg'

const ChallengePreview = props => (
  <Card p={3} wrap>
    <BackgroundImage ratio={1 / 1.6} src={placeholder} mb={3} />
    <Flex w={1} mb={2} justify="space-between">
      <PrettyLink>✈️ Categories</PrettyLink>
      <Text bold>Upcoming 🔵</Text>
    </Flex>
    <Flex w={1} mb={2} align="flex-start">
      <Image width={32} mr={2} src={placeholder} />
      <Heading f={2}>Challenge name</Heading>
    </Flex>
    <Flex w={1} mb={2}>
      <Text bold>
        Happening in <PrettyLink>🗺 Location {props.location}</PrettyLink> on
        d/M
      </Text>
    </Flex>
    <Text mb={3}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien
      quam. Sed dapibus est id...
    </Text>
    <Flex w={1} mb={2} justify="space-between" align="baseline">
      <PrettyLink block>## joined</PrettyLink>
      <ButtonLink to="challenge-single">See more →</ButtonLink>
    </Flex>
  </Card>
)
export default ChallengePreview
