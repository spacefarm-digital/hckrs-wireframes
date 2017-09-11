import React from "react";
import Link from "gatsby-link";
import { Flex, Button, Text, Box, Heading } from "rebass";

import PrimaryNav from "../components/PrimaryNav";
import Restrain from "../components/Restrain";
import ChallengeInfo from "../components/ChallengeInfo";

const ChallengesIndex = () => (
  <Restrain>
    <PrimaryNav />
    {/* Title */}

    <Box px={3}>
      {" "}
      <ChallengeInfo />
    </Box>
  </Restrain>
);
export default ChallengesIndex;
