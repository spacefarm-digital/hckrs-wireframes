import React from 'react'
import Link from 'gatsby-link'
import { Flex, Button, Text, Box, Heading } from 'rebass'

import HackerPreview from '../components/HackerPreview'
import ChallengePreview from '../components/ChallengePreview'
import PrimaryNav from '../components/PrimaryNav'
import Swiper from '../components/Swiper'
import Filter from '../components/Filter'
import Restrain from '../components/Restrain'

const ChallengesIndex = () => (
  <Restrain>
    <PrimaryNav />
    {/* Title */}
    <Heading f={4} mb={4} pt={4} px={3}>
      Challenges
    </Heading>
    {/* Filter */}
    <Filter />
    {/* Challenges listing */}
    <Box px={3}>
      <Flex wrap mx={-2}>
        <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
          <ChallengePreview
            title="Spartan Hackathon"
            image="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/684/thumb/bigred_splash.png?1500042878"
            date="27 September"
            location="<ChallengePreview
          title="
            BigRed //Hacks"
            category="👩‍⚕️"
            image="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/684/thumb/bigred_splash.png?1500042878"
            location="Cornell University"
            excerpt="Across three days, students from all across the US will gather to build the coolest and most innovative projects, meet amazing people, and win some prizes along the way!"
            participants={32}
            date="September 15-17"
          />
        </Box>
        <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
          <ChallengePreview
            title="Spartan Hackathon"
            image="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/684/thumb/bigred_splash.png?1500042878"
            date="27 September"
            location="<ChallengePreview
          title="
            BigRed //Hacks"
            category="👩‍⚕️"
            image="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/684/thumb/bigred_splash.png?1500042878"
            location="Cornell University"
            excerpt="Across three days, students from all across the US will gather to build the coolest and most innovative projects, meet amazing people, and win some prizes along the way!"
            participants={32}
            date="September 15-17"
          />
        </Box>
        <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
          <ChallengePreview
            title="Spartan Hackathon"
            image="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/684/thumb/bigred_splash.png?1500042878"
            date="27 September"
            location="<ChallengePreview
          title="
            BigRed //Hacks"
            category="👩‍⚕️"
            image="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/684/thumb/bigred_splash.png?1500042878"
            location="Cornell University"
            excerpt="Across three days, students from all across the US will gather to build the coolest and most innovative projects, meet amazing people, and win some prizes along the way!"
            participants={32}
            date="September 15-17"
          />
        </Box>
        <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
          <ChallengePreview
            title="Spartan Hackathon"
            image="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/684/thumb/bigred_splash.png?1500042878"
            date="27 September"
            location="<ChallengePreview
          title="
            BigRed //Hacks"
            category="👩‍⚕️"
            image="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/684/thumb/bigred_splash.png?1500042878"
            location="Cornell University"
            excerpt="Across three days, students from all across the US will gather to build the coolest and most innovative projects, meet amazing people, and win some prizes along the way!"
            participants={32}
            date="September 15-17"
          />
        </Box>
        <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
          <ChallengePreview
            title="Spartan Hackathon"
            image="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/684/thumb/bigred_splash.png?1500042878"
            date="27 September"
            location="<ChallengePreview
          title="
            BigRed //Hacks"
            category="👩‍⚕️"
            image="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/684/thumb/bigred_splash.png?1500042878"
            location="Cornell University"
            excerpt="Across three days, students from all across the US will gather to build the coolest and most innovative projects, meet amazing people, and win some prizes along the way!"
            participants={32}
            date="September 15-17"
          />
        </Box>
      </Flex>
    </Box>
  </Restrain>
)
export default ChallengesIndex
