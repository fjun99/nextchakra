import { Flex, Spacer, Text, Icon } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'

export default function Footer() {
  return (
    <Flex as='footer' alignItems='center' fontSize={12} py={6}>
      <Text>
        BUIDL with <Icon as={AiFillHeart} color='red.500' boxSize={4}/>
      </Text>
      <Spacer />
    </Flex>
  );
}
