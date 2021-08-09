import { Flex, Box, Img, Text } from '@chakra-ui/react'
import { Container } from '../../components/Container'

export function Categories() {
  return (
    <Container mt="7.1875rem">
      <Flex align="center" justify="space-between">
        <Flex flexDir="column" align="center">
          <Img src="/images/cocktail.svg" alt="night life" />
          <Text as="strong" color="gray.600" mt="1.5rem" fontWeight="600" fontSize="1.5rem">night life</Text>
        </Flex>

        <Flex flexDir="column" align="center">
          <Img src="/images/surf.svg" alt="beach" />
          <Text as="strong" color="gray.600" mt="1.5rem" fontWeight="600" fontSize="1.5rem">beach</Text>
        </Flex>

        <Flex flexDir="column" align="center">
          <Img src="/images/building.svg" alt="modern" />
          <Text as="strong" color="gray.600" mt="1.5rem" fontWeight="600" fontSize="1.5rem">modern</Text>
        </Flex>

        <Flex flexDir="column" align="center">
          <Img src="/images/museum.svg" alt="classic" />
          <Text as="strong" color="gray.600" mt="1.5rem" fontWeight="600" fontSize="1.5rem">classic</Text>
        </Flex>

        <Flex flexDir="column" align="center">
          <Img src="/images/earth.svg" alt="and more..." />
          <Text as="strong" color="gray.600" mt="1.5rem" fontWeight="600" fontSize="1.5rem">and more...</Text>
        </Flex>
      </Flex>

      <Box w='90px' height='2px' m='5rem auto 0' background="gray.600" />
    </Container>
  )
}