import { Box, Container, Flex, Img, Heading } from '@chakra-ui/react'
import React from 'react'

import { Header } from '../components/Header'

export default function Home() {
  return (
    <Box
      w="100vw"
      h="100vh"
    >
      <Header />

      <Container 
        backgroundImage="/images/background.jpg"
        minW="100%"
        h="335px"
      >
        <Flex flexDir="column">
          <Heading as="h1">
            5 Continentes, infinitas possibilidades
          </Heading>
          <Heading as="h2">
            Chegou a hora de tirar do papel a viagem que voce sempre sonhou
          </Heading>
        </Flex>

        <Img />
        
      </Container>

    </Box>
  )
}
