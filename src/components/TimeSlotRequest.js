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
  Button,
  ButtonOutline,
} from 'rebass'
import Card from '../components/Card'

import PrettyLink from '../components/PrettyLink'

const TimeSlotRequest = props => (
  <Card p={3} wrap>
    <Heading f={3} mb={2}>
      10.00 - 10.30
    </Heading>
    <Text mb={3}>
      Requested by <PrettyLink>User X</PrettyLink> in{' '}
      <PrettyLink>Challenge X</PrettyLink>
    </Text>
    {/* Actions */}
    <Flex justify="flex-end" mx={-1} w={1}>
      <Box px={1}>
        <ButtonOutline>Decline</ButtonOutline>
      </Box>
      <Box px={1}>
        <Button>Accept</Button>
      </Box>
    </Flex>
  </Card>
)
export default TimeSlotRequest
