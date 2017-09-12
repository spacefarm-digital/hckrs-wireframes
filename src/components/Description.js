import React from 'react'
import { Flex, Button, Text, Box, Heading, Image, Embed, Divider } from 'rebass'

const Description = () => (
  <Box mb={4}>
    <Heading f={3} mb={1} is="h2">
      Description
    </Heading>
    <Text mb={3}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien
      quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing.
      Quisque sit amet dui dui.
    </Text>
    <Image
      src="http://bbdesign.netlify.com/assets/toolkit/images/ghost-image.svg"
      mb={3}
    />
    <Text mb={3}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien
      quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing.
      Quisque sit amet dui dui.
    </Text>
    <Text mb={3}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien
      quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing.
      Quisque sit amet dui dui.
    </Text>
    <Embed mb={3}>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/pDxn0Xfqkgw"
        frameBorder="0"
        allowFullScreen
      />
    </Embed>
    <Text mb={3}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien
      quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing.
      Quisque sit amet dui dui.
    </Text>
    <Divider w={1} />
  </Box>
)

export default Description
