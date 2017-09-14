import React from 'react'
import {
  Text,
  Flex,
  Badge,
  Box,
  Heading,
  Measure,
  BackgroundImage,
} from 'rebass'

import HackerPreview from '../components/HackerPreview'
import Swiper from '../components/Swiper'
import ButtonLink from '../components/ButtonLink'

import placeholder from '../images/placeholder-object.jpg'

const HomeHero = () => (
  <Flex is="section" wrap justify="center" mb={5}>
    <BackgroundImage src={placeholder} ratio={1 / 3} mb={3} />
    <Box>
      <Heading mb={2} f={[4, 5]}>
        Welcome heading
      </Heading>
      <Measure>
        <Text mb={2}>
          What is Hckrs in a nutshell, short text describing Hckrs in a
          tweetable format. What is Hckrs in a nutshell, short text describing
          Hckrs in a tweetable format.
        </Text>
        <Flex align="center" column>
          <Text mb={3} bold>
            See how Hckrs can help you
          </Text>
          <Flex mx={-1} w={1} justify="center">
            <Box px={1}>
              <ButtonLink>I'm a challenger</ButtonLink>
            </Box>
            <Box px={1}>
              <ButtonLink>I'm a hacker</ButtonLink>
            </Box>
          </Flex>
        </Flex>
      </Measure>
    </Box>
  </Flex>
)
export default HomeHero
