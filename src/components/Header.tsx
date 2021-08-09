import { Flex, Img } from '@chakra-ui/react'
import { Container } from './Container'

export function Header() {
  return (
    <Flex minH="100px" align="center">
      <Container flexDir="row" justify="center" >
        <Img src="/images/logo.svg" alt="Worldtrip" />
      </Container>
    </Flex>
  )
}