import React from 'react'
import { Avatar, Heading, Text, Flex, Box } from 'rebass'
import Card from './Card'

import PrettyLink from './PrettyLink'
import placeholder from '../images/placeholder-object.jpg'

const SponsorPreview = props => (
  <Card p={3} w={1} align="center" column>
    <Avatar src={placeholder} mb={3} size={96} />
    <PrettyLink>
      <Heading is="h3" f={1} w={1}>
        Sponsor name
      </Heading>
    </PrettyLink>
  </Card>
)
export default SponsorPreview
