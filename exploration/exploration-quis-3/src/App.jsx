import { Alert, AlertIcon, Flex, Text } from '@chakra-ui/react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Manage from './Manage'

function App() {
  return (
    <>
      <main>
        <Flex justifyContent='space-between' padding={4} shadow={'xl'} alignItems={'center'}>
          <Text fontWeight={800} fontSize={100}>Logo</Text>
          <Flex fontWeight={500} fontSize={16} gap={8}>
            <Text>About Me</Text>
            <Text>Shop</Text>
            <Link to='/'>Home</Link>
            <Link to='/manage'>Manage</Link>
          </Flex>
        </Flex>
      </main>

      <Flex paddingX={8} paddingTop={8}>
        <Alert status='error'>
          <AlertIcon />
          There was an error processing your request
        </Alert>
      </Flex>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/manage' Component={Manage} />
      </Routes>
    </>
  )
}

export default App
