import React from 'react'
import { Avatar, Heading, Text, Flex, BackgroundImage, Circle } from 'rebass'
import Card from '../components/Card'

import PrettyLink from '../components/PrettyLink'
import ButtonLink from '../components/ButtonLink'

import placeholder from '../images/placeholder-object.jpg'

const HackPreview = props => (
  <Card p={3} wrap>
    <Flex w={1} mb={2}>
      <Heading f={2}>Hack name</Heading>
    </Flex>
    <Text mb={2}>
      In challenge: <PrettyLink>Challenge name</PrettyLink>
    </Text>
    <Text mb={3}>
      Hack description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras sed sapien quam. Sed dapibus est id...
    </Text>
    <Flex w={1} mb={2} justify="flex-end">
      <ButtonLink to="challenge-single">See more →</ButtonLink>
    </Flex>
  </Card>
)
export default HackPreview
