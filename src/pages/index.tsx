import { Container, Flex } from '@chakra-ui/react'
import Cart from 'components/cart'
import Details from 'components/details'

export default function Home() {
  return (
    <Container maxW="container.xl" padding={0}>
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}
