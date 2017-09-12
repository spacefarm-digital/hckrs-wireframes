import React from 'react'
import { Flex, Button, Text, Box, Heading } from 'rebass'

import Card from '../components/Card'
import PrettyLink from '../components/PrettyLink'

const Subchallenge = () => (
  <Card p={3} wrap mb={3}>
    <Heading f={2} mb={1} is="h3">
      Subchallenge name
    </Heading>
    <Text mb={3}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien
      quam.
    </Text>
    <Flex w={1} justify="space-between" align="baseline">
      <PrettyLink>5 submitted</PrettyLink>
      <Button>Submit hack</Button>
    </Flex>
  </Card>
)

export default Subchallenge
