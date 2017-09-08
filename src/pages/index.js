import React from 'react'
import Link from 'gatsby-link'
import { Flex, Button, Text, Container } from 'rebass'
import ChallengePreview from '../components/ChallengePreview'
import PrimaryNav from '../components/PrimaryNav'

const IndexPage = () => (
  <div>
    <PrimaryNav />
    <Container pt={3}>
      <ChallengePreview
        title="BigRed//Hacks"
        category="👩‍⚕️"
        image="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/684/thumb/bigred_splash.png?1500042878"
        location="Cornell University"
        excerpt="Across three days, students from all across the US will gather to build the coolest and most innovative projects, meet amazing people, and win some prizes along the way!"
        participants={32}
        date="September 15-17"
      />
    </Container>
  </div>
)
export default IndexPage
