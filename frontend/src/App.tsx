import { useQuery } from '@apollo/client'
import NavBar from './components/nav-bar'
import SearchInput from './components/search-input'
import { GET_ALL_BOOKS } from './services/getBooks'
import { Book } from './types/book'

function App() {
  const { loading, error, data } = useQuery<Book[]>(GET_ALL_BOOKS)
  console.log('data', data)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <div className='w-full min-h-screen max-w-screen-lg container mx-auto'>
      <header className='py-4 w-full space-y-8'>
        <NavBar />
        <SearchInput />
      </header>{' '}
    </div>
  )
}

export default App
