import React from 'react'
import Link from 'gatsby-link'
import { Flex, Button, Text } from 'rebass'

const IndexPage = () => (
  <div>
    <Flex justify="flex-end">
      <Button>Hey</Button>
      <Text fontSize={1} bg="red">
        A text thing
      </Text>
      <p>A text thing</p>
    </Flex>
  </div>
)

export default IndexPage
