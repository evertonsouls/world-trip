import { Box, Container as ChakraContainer, Flex, Img, Heading } from '@chakra-ui/react'
import { Container } from '../../components/Container'

export function Hero() {
  return (
    <ChakraContainer 
        backgroundImage="/images/background.jpg"
        minW="100%"
        h="335px"
        css={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <Container>
          <Heading 
            as="h1" 
            mt="5rem" 
            maxW="360px"
            color="gray.100" 
            lineHeight="3.5rem"
            fontSize="2.25rem"
            fontWeight="medium"
          >
            5 Continents, infinite possibilities
          </Heading>
          <Heading 
            as="h2" 
            mt="1.25rem" 
            maxW="480px"
            color="gray.100"
            lineHeight="2rem" 
            fontSize="1.25rem" 
            fontWeight="regular" 
            opacity=".7"
          >
            It's time to take the trip you've always dreamed of on paper
          </Heading>

          <Box position="absolute" right="0" top="30%" >
            <Img src="/images/airplane.svg" alt="Airplane" />
          </Box>          
        </Container>        
      </ChakraContainer>
  );
}