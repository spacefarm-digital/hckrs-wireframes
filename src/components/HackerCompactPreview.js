import React from 'react'
import { Avatar, Heading, Text, Flex, Box, Relative, Absolute } from 'rebass'
import Card from './Card'

import PrettyLink from './PrettyLink'
import placeholder from '../images/placeholder-avatar.jpg'
import placeholderTeam from '../images/placeholder-object.jpg'

const HackerCompactPreview = props => (
  <Card p={3} column align="center">
    <Relative mb={3}>
      <Avatar src={placeholder} size={80} />
      <Absolute bottom right>
        <Avatar src={placeholderTeam} size={24} />
      </Absolute>
    </Relative>
    <Box>
      <PrettyLink to="hacker-single">
        <Heading is="h2" f={1} mb={1} center>
          Hacker Name
        </Heading>
      </PrettyLink>
      <Text center>✈️👩‍⚕️🎓</Text>
    </Box>
  </Card>
)
export default HackerCompactPreview
