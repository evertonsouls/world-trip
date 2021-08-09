import { Box, Flex, Img, Text } from '@chakra-ui/react'
import { Hero } from './home/Hero'
import { Header } from '../components/Header'
import { Categories } from './home/Categories'

export default function Home() {
  return (
    <Box w="100vw" h="100vh">
      <Header />
      <Hero />
      <Categories />
    </Box>
  )
}
