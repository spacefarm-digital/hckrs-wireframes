import React from 'react'
import { Flex, Heading, Box } from 'rebass'
import PrimaryNav from '../components/PrimaryNav'
import ChallengePreview from '../components/ChallengePreview'
import Swiper from '../components/Swiper'
import HackerCompactPreview from '../components/HackerCompactPreview'
import HomeHero from '../components/HomeHero'
import News from '../components/News'
import Restrain from '../components/Restrain'

const IndexPage = () => (
  <Box>
    <PrimaryNav />
    <Restrain pt={3} p={3}>
      {/* Hero */}
      <HomeHero />
      {/* Challenges */}
      <Box is="section">
        <Heading f={3} mb={3} is="h2">
          Challenges
        </Heading>
        <Flex wrap mx={-2} mb={4}>
          {/* Challenges listing */}
          <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
            <ChallengePreview />
          </Box>
          <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
            <ChallengePreview />
          </Box>
          <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
            <ChallengePreview />
          </Box>
          <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
            <ChallengePreview />
          </Box>
          <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
            <ChallengePreview />
          </Box>
        </Flex>
      </Box>
    </Restrain>
    {/* HackerCompactPreviews */}
    <Box is="section">
      <Heading f={3} mb={3} is="h2" px={3}>
        Hackers
      </Heading>
      <Swiper pb={2} mb={4}>
        <Flex>
          <Box pr={2} pl={3}>
            <HackerCompactPreview />
          </Box>
          <Box px={2}>
            <HackerCompactPreview />
          </Box>
          <Box px={2}>
            <HackerCompactPreview />
          </Box>
          <Box px={2}>
            <HackerCompactPreview />
          </Box>
          <Box px={2}>
            <HackerCompactPreview />
          </Box>
          <Box px={2}>
            <HackerCompactPreview />
          </Box>
          <Box px={2}>
            <HackerCompactPreview />
          </Box>
          <Box pl={2} pr={3}>
            <HackerCompactPreview />
          </Box>
        </Flex>
      </Swiper>
    </Box>
    {/* News */}
    <Restrain px={3}>
      <Heading f={3} mb={3} is="h2">
        News
      </Heading>
      <News />
    </Restrain>
  </Box>
)
export default IndexPage
