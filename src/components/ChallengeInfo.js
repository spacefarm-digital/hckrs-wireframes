import React from "react";
import {
  Avatar,
  Heading,
  Text,
  Flex,
  Button,
  BackgroundImage,
  Circle
} from "rebass";
import Card from "../components/Card";

import PrettyLink from "../components/PrettyLink";

const ChallengeInfo = props => (
  <Card wrap p={3}>
    <Flex>
      <Avatar
        size={64}
        src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
      />
      <Heading f={4} mb={4} px={3}>
        Challenge title
      </Heading>
    </Flex>
    <PrettyLink>Challenger</PrettyLink>
    <Text>Upcoming 🔵</Text>
    <Text>📅 11-13 Sept 2017</Text>
    <Text>🗺 Sofia</Text>
    <Text>🚀 Category</Text>
    <Heading>Prizes</Heading>
    <Text>1st place: $500</Text>
  </Card>
);
export default ChallengeInfo;
