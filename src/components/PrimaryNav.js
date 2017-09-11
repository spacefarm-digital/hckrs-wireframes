import React from 'react'
import { Button, Flex, Box } from 'rebass'
import Swiper from '../components/Swiper'
import PrettyLink from '../components/PrettyLink'
import Restrain from '../components/Restrain'
import MediaQuery from 'react-responsive'

const PrimaryNav = () => (
  <Restrain>
    <MediaQuery query="(max-width: 540px)">
      <Flex wrap>
        {/* Logo + CTA  */}
        <Flex mb={2} px={3} py={2} w={1} justify="space-between" align="center">
          <PrettyLink to="/">Hckrs</PrettyLink>
          <Button>Register</Button>
        </Flex>
        {/* All the PrettyLinks */}
        <Swiper is="ul">
          <Box p={3}>
            <PrettyLink to="/benefits">Benefits</PrettyLink>
          </Box>
          <Box p={3}>
            <PrettyLink to="/challenges">Challenges</PrettyLink>
          </Box>
          <Box p={3}>
            <PrettyLink to="/hackers">Hackers</PrettyLink>
          </Box>
          <Box p={3}>
            <PrettyLink to="/news">News</PrettyLink>
          </Box>
        </Swiper>
      </Flex>
    </MediaQuery>
    <MediaQuery query="(min-width: 540px)">
      <Flex justify="space-between" align="center" p={3}>
        {/* Logo + CTA  */}
        <PrettyLink to="/">Hckrs</PrettyLink>
        {/* All the PrettyLinks */}
        <Flex is="ul" align="center">
          <Box px={3} is="li">
            <PrettyLink to="/benefits">Benefits</PrettyLink>
          </Box>
          <Box px={3} is="li">
            <PrettyLink to="/challenges">Challenges</PrettyLink>
          </Box>
          <Box px={3} is="li">
            <PrettyLink to="/hackers">Hackers</PrettyLink>
          </Box>
          <Box px={3} is="li">
            <PrettyLink to="/news">News</PrettyLink>
          </Box>
          <Button>Register</Button>
        </Flex>
      </Flex>
    </MediaQuery>
  </Restrain>
)
export default PrimaryNav
