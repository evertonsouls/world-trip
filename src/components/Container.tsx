import { Flex, FlexProps } from '@chakra-ui/react';

export function Container({ children, ...rest }: FlexProps) {
  return (
    <Flex           
      w="100%" 
      maxW="1160px" 
      margin="0 auto"
      flexDir="column" 
      position="relative"
      {...rest}
    >
        {children}
    </Flex>
  );
}