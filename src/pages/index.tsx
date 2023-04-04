import Head from 'next/head'
import { HOME_TITLE, SITE_TITLE } from '@/site-config'
import { 
  Container, Heading, Text, 
  SimpleGrid, Card, CardBody, Image, 
  } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${HOME_TITLE}  - ${SITE_TITLE}`}</title>
      </Head> 

      <Container maxWidth='container.lg' >
        <Heading color='red' my='20' textAlign='center'>
          A Next.js 13 site with Chakra UI
        </Heading>
        <Text  textAlign='center'>
            Get started by editing&nbsp;
            <code >src/pages/index.tsx</code>
        </Text>
      </Container>

      <Container maxWidth='container.lg'>
        <Heading size='sm' my='10' textAlign='center'>
          Add content here
        </Heading>
        
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>

            <Card maxW='sm' key={0}  _hover={{ boxShadow: 'lg', transform: 'scale(1.01)' }}>
              <CardBody userSelect='none'>
                <Image src='card0.avif' alt='card0' />
              </CardBody>
            </Card>

            <Card maxW='sm' key={1}  _hover={{ boxShadow: 'lg', transform: 'scale(1.01)' }}>
            <CardBody userSelect='none'>
              <Image src='card1.avif'  alt='card1' />
            </CardBody>
          </Card>          

          <Card maxW='sm' key={2}  _hover={{ boxShadow: 'lg', transform: 'scale(1.01)' }}>
            <CardBody userSelect='none'>
              <Image src='card2.avif'  alt='card2'/>
            </CardBody>
          </Card>      
            
        </SimpleGrid>
      </Container>
    </>
  )
}
