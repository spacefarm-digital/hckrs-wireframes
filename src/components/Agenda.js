import React from 'react'
import {
  Flex,
  Button,
  Text,
  Box,
  Heading,
  Image,
  Embed,
  Divider,
  Sticky,
  Panel,
  PanelHeader,
  PanelFooter,
  Arrow,
} from 'rebass'

import Card from '../components/Card'

const Agenda = () => (
  <Box mb={4}>
    <Heading f={3} mb={3} is="h2">
      Agenda
    </Heading>
    <Panel color="blue">
      <PanelHeader p={0}>
        <Flex f={2} p={2} justify="space-between" align="center">
          <Text bold f={2}>
            Wednesday, 12
          </Text>
          <Arrow direction="down" />
        </Flex>
      </PanelHeader>
      {/* Opened agenda day */}
      <Flex
        f={2}
        p={2}
        justify="space-between"
        align="center"
        bg="blue"
        color="white"
      >
        <Text bold f={2}>
          Thursday, 13
        </Text>
        <Arrow direction="up" />
      </Flex>
      <Flex color="black" p={2}>
        <Text f={3} bold mr={3}>
          10:00
        </Text>
        <Text pt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
          sapien quam. Sed dapibus est id enim facilisis, at posuere turpis
          adipiscing. Quisque sit amet dui dui.
        </Text>
      </Flex>
      <Divider w={1} m={0} />
      <Flex color="black" p={2}>
        <Text f={3} bold mr={3}>
          10:30
        </Text>
        <Text pt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
          sapien quam.
        </Text>
      </Flex>
      <Divider w={1} m={0} />
      <Flex color="black" p={2}>
        <Text f={3} bold mr={3}>
          12.30
        </Text>
        <Text pt={2}>Lunch with some people</Text>
      </Flex>
      <PanelFooter p={0}>
        <Flex f={2} p={2} justify="space-between" align="center">
          <Text bold f={2}>
            Friday, 14
          </Text>
          <Arrow direction="down" />
        </Flex>
      </PanelFooter>
    </Panel>
  </Box>
)

export default Agenda
