import React from "react";
import { Avatar, Text, Flex } from "rebass";
import Shadow from "../components/Shadow";

const AvatarCard = props => (
  <Shadow p={3}>
    <Avatar mr={3} src={props.image} size={64} />
    <Flex column>
      <Text bold f={2}>
        {props.name}
      </Text>
      <Text>{props.title}</Text>
    </Flex>
  </Shadow>
);
export default AvatarCard;
