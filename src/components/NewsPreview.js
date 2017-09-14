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

const NewsPreview = props => (
  <Card p={3} wrap>
    <BackgroundImage ratio={1 / 1.6} src={placeholder} mb={3} />
    <Flex w={1} mb={2} justify="space-between">
      <PrettyLink>✈️ Categories</PrettyLink>
      <Text bold>d/M (date)</Text>
    </Flex>
    <Flex w={1} mb={2}>
      <Heading f={2}>News title. It will be much longer, like this</Heading>
    </Flex>
    <Flex w={1} mb={2}>
      <Text bold>
        Published by <PrettyLink>😀 Author Name {props.location}</PrettyLink>
      </Text>
    </Flex>
    <Text mb={3}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien
      quam. Sed dapibus est id...
    </Text>
    <ButtonLink to="challenge-single" mb={3}>
      Read more →
    </ButtonLink>
  </Card>
)
export default NewsPreview
