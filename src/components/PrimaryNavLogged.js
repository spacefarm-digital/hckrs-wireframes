import React from 'react'
import { Flex, Box, Avatar } from 'rebass'
import MediaQuery from 'react-responsive'
import Swiper from '../components/Swiper'
import PrettyLink from '../components/PrettyLink'
import Restrain from '../components/Restrain'
import ButtonLink from '../components/ButtonLink'

import placeholder from '../images/placeholder-avatar.jpg'

const PrimaryNavLogged = () => (
  <Restrain>
    <MediaQuery query="(max-width: 540px)">
      <Flex wrap>
        {/* Logo + CTA  */}
        <Flex mb={2} px={3} py={2} w={1} justify="space-between" align="center">
          <PrettyLink to="/">Hckrs</PrettyLink>
          <Avatar src={placeholder} size={40} />
        </Flex>
        {/* All the PrettyLinks */}
        <Swiper is="ul">
          <Box p={3}>
            <PrettyLink to="/challenges-index">Challenges</PrettyLink>
          </Box>
          <Box p={3}>
            <PrettyLink to="/hackers-index">Hackers</PrettyLink>
          </Box>
          <Box p={3}>
            <PrettyLink to="/news-index">News</PrettyLink>
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
            <PrettyLink to="/challenges-index">Challenges</PrettyLink>
          </Box>
          <Box px={3} is="li">
            <PrettyLink to="/hackers-index">Hackers</PrettyLink>
          </Box>
          <Box px={3} is="li">
            <PrettyLink to="/news-index">News</PrettyLink>
          </Box>
          <Avatar src={placeholder} size={40} />
        </Flex>
      </Flex>
    </MediaQuery>
  </Restrain>
)
export default PrimaryNavLogged
