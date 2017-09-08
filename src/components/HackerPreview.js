import React from 'react'
import { Avatar, Heading, Text, Flex, Box } from 'rebass'
import Card from './Card'

import CleanLink from './CleanLink'

const HackerPreview = props => (
  <CleanLink to="/">
    <Card p={3} w={1} align="center">
      <Avatar src={props.avatar} mr={3} size={64} />
      <Box>
        <Heading is="h2" f={2} mb={1}>
          {props.name}
        </Heading>
        <Text mb={1}>
          {props.hacks} hacks, 🗺 {props.location}
        </Text>
        <Text>Interested in: {props.interests}</Text>
      </Box>
    </Card>
  </CleanLink>
)
export default HackerPreview
