import React from "react";
import Link from "gatsby-link";
import { Flex, Button, Text } from "rebass";

import MyCard from "../components/card";

const IndexPage = () => (
  <div>
    <Flex justify="flex-start">
      <Button>Hey</Button>
      <Text fontSize={1} bg="red" is="h1" bold w={1 / 2} center>
        A text thing
      </Text>
      <p>A text thing</p>
    </Flex>
    <Link to="page-2">Click me</Link>
    <MyCard />
  </div>
);

export default IndexPage;
