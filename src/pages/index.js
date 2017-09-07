import React from "react";
import Link from "gatsby-link";
import { Flex, Button, Text, Container } from "rebass";
import AvatarCard from "../components/AvatarCard";
import MyCard from "../components/Card";
import PrimaryNav from "../components/PrimaryNav";

const IndexPage = () => (
  <div>
    <PrimaryNav />
    <Container pt={5}>
      <AvatarCard
        image="https://static.esea.net/global/images/users/428235.1431669312.jpg"
        name="Jane Doe"
        title="boss lady"
      />
    </Container>
  </div>
);

export default IndexPage;
