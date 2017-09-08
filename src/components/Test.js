import React from 'react'
import { Border, Box, Text, Flex } from 'rebass'

const Test = () => (
  <Border bg="blue" color="red" text-color="white" p={2}>
    <Flex justify="space-between" align="center">
      <Box color="white">Hello</Box>
      <Text f={3}>🤖</Text>
    </Flex>
  </Border>
)

export default Test
