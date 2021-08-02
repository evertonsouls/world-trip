import { Flex, Container, Img } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex>
      <Container maxW="1160px" w="100%" align="center">
        <Img src="/images/logo.svg" alt="worldtrip" />
      </Container>
    </Flex>
  )
}