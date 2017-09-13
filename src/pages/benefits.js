import React from 'react'
import Link from 'gatsby-link'

import Restrain from '../components/Restrain'
import PrimaryNav from '../components/PrimaryNav'
import ButtonLink from '../components/ButtonLink'
import PrettyLink from '../components/PrettyLink'

import {
  Flex,
  Box,
  Tabs,
  Group,
  Heading,
  Text,
  Avatar,
  Measure,
  Button,
} from 'rebass'

import placeholder from '../images/placeholder-avatar.jpg'

const Benefits = () => (
  <Restrain>
    <PrimaryNav />
    <Box px={3} pt={4} mb={4}>
      <Flex justify="center" mb={4}>
        {/* Tabs */}
        <Group>
          <ButtonLink to="benefits">For challengers</ButtonLink>
          <ButtonLink>For hackers</ButtonLink>
        </Group>
      </Flex>
      <Box f={2} mb={4} is="ul">
        <li>
          <PrettyLink>Is this for me?</PrettyLink>
        </li>
        <li>
          <PrettyLink>What can Hckrs offer you?</PrettyLink>
        </li>
        <li>
          <PrettyLink>What is the pricing?</PrettyLink>
        </li>
      </Box>
      {/* Personas */}
      <Box>
        <Heading is="h2" f={3} mb={2}>
          Is this for me?
        </Heading>
        <Text mb={4}>Are you one of the following text...</Text>
        <Flex mx={-2} wrap>
          <Box px={2} w={[1, 1 / 2, 1 / 3]} mb={3}>
            <Flex column align="center">
              <Avatar src={placeholder} size={160} mb={3} />
              <Text>Persona name</Text>
            </Flex>
          </Box>
          <Box px={2} w={[1, 1 / 2, 1 / 3]} mb={3}>
            <Flex column align="center">
              <Avatar src={placeholder} size={160} mb={3} />
              <Text>Persona name</Text>
            </Flex>
          </Box>
          <Box px={2} w={[1, 1 / 2, 1 / 3]} mb={3}>
            <Flex column align="center">
              <Avatar src={placeholder} size={160} mb={3} />
              <Text>Persona name</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      {/* What can we offer */}
      <Box mb={4}>
        <Heading is="h2" f={3} mb={2}>
          What can Hckrs offer you?
        </Heading>
        <Measure>
          Benefits text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere
          turpis adipiscing. Quisque sit amet dui dui.
        </Measure>
      </Box>
      {/* What is the pricing? */}
      <Box mb={4}>
        <Heading is="h2" f={3} mb={2}>
          What is the pricing?
        </Heading>
        <Measure>
          Benefits text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere
          turpis adipiscing. Quisque sit amet dui dui.
        </Measure>
      </Box>
      <Flex column align="center">
        <Heading is="h2" mb={3} f={[3, 4]} center>
          Join now incentive heading
        </Heading>
        <Button>Join now and start your challenge!</Button>
      </Flex>
    </Box>
  </Restrain>
)
export default Benefits
