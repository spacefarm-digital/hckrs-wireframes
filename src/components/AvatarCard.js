import React from 'react'
import { Avatar, Text, Flex } from 'rebass'
import Card from '../components/Card'

const AvatarCard = props => (
  <Card p={3}>
    <Avatar mr={3} src={props.image} size={64} />
    <Flex column>
      <Text bold f={2}>
        {props.name}
      </Text>
      <Text>{props.title}</Text>
    </Flex>
  </Card>
)
export default AvatarCard
