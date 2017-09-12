import React from 'react'
import { Avatar, Heading, Text, Flex, Box, Button } from 'rebass'
import Card from './Card'
import placeholder from '../images/placeholder-avatar.jpg'

import PrettyLink from './PrettyLink'

const AdvisorPreview = props => (
  <Card p={3} w={1} align="center" wrap>
    <Flex align="center" mb={3}>
      <Avatar src={placeholder} mr={3} size={64} />
      <Box>
        <PrettyLink>
          <Heading is="h2" f={2} mb={1}>
            Advisor Name
          </Heading>
        </PrettyLink>
        <Text>Interested in: ✈️👩‍⚕️🎓 categories listing</Text>
      </Box>
    </Flex>
    <Flex w={1} justify="flex-end">
      <Button>Book timeslot</Button>
    </Flex>
  </Card>
)
export default AdvisorPreview
