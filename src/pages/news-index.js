import React from 'react'
import Link from 'gatsby-link'
import { Flex, Button, Text, Box, Heading } from 'rebass'

import HackerPreview from '../components/HackerPreview'
import NewsPreview from '../components/NewsPreview'
import PrimaryNav from '../components/PrimaryNav'
import Swiper from '../components/Swiper'
import Filter from '../components/Filter'
import Restrain from '../components/Restrain'
import PrettyInput from '../components/PrettyInput'
import Search from '../components/Search'
import News from '../components/News'

const NewsIndex = () => (
  <Restrain>
    <PrimaryNav />
    <Box px={3}>
      {/* Title + search */}
      <Flex wrap align="center">
        <Box w={[1, 1, 2 / 3]} mb={3}>
          <Heading f={4}>News</Heading>
        </Box>
        <Box w={[1, 1, 1 / 3]} mb={3}>
          <Search />
        </Box>
      </Flex>
      <News />
    </Box>
  </Restrain>
)
export default NewsIndex
