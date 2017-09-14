import React from 'react'
import {
  Avatar,
  Heading,
  Text,
  Flex,
  BackgroundImage,
  Circle,
  Image,
  Box,
} from 'rebass'
import Card from '../components/Card'

import PrettyLink from '../components/PrettyLink'
import ButtonLink from '../components/ButtonLink'

import placeholder from '../images/placeholder-object.jpg'

const ChallengePreview = props => (
  <Card p={3} wrap>
    <Flex w={1} mb={2} justify="flex-end">
      <Text bold>Active ✅</Text>
    </Flex>
    <Flex w={1} mb={3} align="flex-start">
      <Image width={32} mr={2} src={placeholder} />
      <Heading f={2}>Challenge name</Heading>
    </Flex>
    {/* Updates */}
    <Box is="ul" mb={3}>
      <Text mb={2} is="li">
        <PrettyLink>Team X</PrettyLink> posted the hack{' '}
        <PrettyLink>Hack X</PrettyLink>
      </Text>
      <Text mb={2} is="li">
        A new <PrettyLink>prize</PrettyLink> was added
      </Text>
      <Text is="li">
        The event <PrettyLink>Event X</PrettyLink> was modified
      </Text>
    </Box>
    <Flex justify="center" w={1}>
      <ButtonLink>See more</ButtonLink>
    </Flex>
  </Card>
)
export default ChallengePreview
