import React from 'react'
import { Avatar, Heading, Text, Flex, Box } from 'rebass'
import Card from './Card'

import PrettyLink from './PrettyLink'
import placeholder from '../images/placeholder-avatar.jpg'

const HackerPreview = props => (
  <Card p={3} w={1} align="center">
    <Avatar src={placeholder} mr={3} size={64} />
    <Box>
      <PrettyLink>
        <Heading is="h2" f={2} mb={1}>
          Hacker Name
        </Heading>
      </PrettyLink>
      <Text mb={1}># of hacks, 🗺 Location</Text>
      <Text>Interested in: ✈️👩‍⚕️🎓 categories listing</Text>
    </Box>
  </Card>
)
export default HackerPreview
