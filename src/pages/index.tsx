import { Container, Flex } from '@chakra-ui/react'
import Cart from 'components/cart'
import Details from 'components/details'

export default function Home() {
  return (
    <Container maxW="container.xl" padding={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}
