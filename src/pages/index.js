import React from 'react'
import Link from 'gatsby-link'
import { Flex, Button, Text, Container, Box } from 'rebass'

import HackerPreview from '../components/HackerPreview'
import ChallengePreview from '../components/ChallengePreview'
import PrimaryNav from '../components/PrimaryNav'

const IndexPage = () => (
  <div>
    <PrimaryNav />
    <Container pt={3}>
      <Flex wrap mx={-2}>
        <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
          <HackerPreview
            name="Darin Dimitroff"
            avatar="https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/15027900_10154247293099613_4567557335203300571_n.jpg?oh=c260f78ce8566d1667c4334babd5720f&oe=5A12BA72"
            hacks={23}
            location="Sofia"
            interests="🍔 ✈️ 🎵"
          />
        </Box>
        <Box px={2} w={[1, 1 / 2, 1 / 2, 1 / 3]} mb={3}>
          <HackerPreview
            name="Darin Dimitroff"
            avatar="https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/15027900_10154247293099613_4567557335203300571_n.jpg?oh=c260f78ce8566d1667c4334babd5720f&oe=5A12BA72"
            hacks={23}
            location="Sofia"
            interests="🍔 ✈️ 🎵"
          />
        </Box>
      </Flex>
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
      </Flex>
    </Container>
  </div>
)
export default IndexPage
