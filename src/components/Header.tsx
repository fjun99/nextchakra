import NextLink from "next/link"
import { Flex, Spacer, Heading, LinkBox } from '@chakra-ui/react'
import { SITE_TITLE, HOME_TITLE } from "@/site-config"

export default function Header() {

  return (
    <Flex as='header' p={4} alignItems='center' >
      <LinkBox>
        <NextLink href={'/'} passHref>
          <Heading size="md" color='red'> {SITE_TITLE} </Heading>
        </NextLink>
      </LinkBox>      
      <Spacer />
      <Heading fontSize="18" fontWeight='600' > 
        { HOME_TITLE }
      </Heading>
      <Spacer />

    </Flex>
  );
}
