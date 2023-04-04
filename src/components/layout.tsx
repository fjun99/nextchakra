import { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: ReactNode
}

export function Layout(props: Props) {
  return (
    <Container maxW='container.lg' >
      <Header />
      {props.children}
      <Footer />
    </Container>
  )
}
