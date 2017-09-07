import React from "react";
import { Button, Flex, Box } from "rebass";
import Swiper from "../components/Swiper";
import PrettyLink from "../components/PrettyLink";

const PrimaryNav = () => (
  <Flex wrap>
    {/* Logo + CTA  */}
    <Flex mb={2} px={3} py={2} w={1} justify="space-between" align="center">
      <PrettyLink to="/">Hckrs</PrettyLink>
      <Button>Register</Button>
    </Flex>
    {/* All the PrettyLinks */}
    <Swiper is="ul">
      <Box px={3}>
        <PrettyLink to="/benefits">Benefits</PrettyLink>
      </Box>
      <Box px={3}>
        <PrettyLink to="/challenges">Challenges</PrettyLink>
      </Box>
      <Box px={3}>
        <PrettyLink to="/hackers">Hackers</PrettyLink>
      </Box>
      <Box px={3}>
        <PrettyLink to="/news">News</PrettyLink>
      </Box>
    </Swiper>
  </Flex>
);
export default PrimaryNav;
