import { useQuery } from '@apollo/client'
import NavBar from './components/nav-bar'
import SearchInput from './components/search-input'
import { GET_ALL_BOOKS } from './services/getBooks'
import { Book, State } from './types/book'
import Books from './components/books'
import CloudSvg from './svg/cloud-svg'
import Cloud2Svg from './svg/cloud-small-svg'
import { useReducer } from 'react'
import { reducer } from './utils/bookReducer'
import EmptyState from './svg/empty-state'
import Typography from '@mui/material/Typography'

function App() {
  const initialState: State = {
    readingList: [],
  }

  const { loading, error, data } = useQuery<Book[]>(GET_ALL_BOOKS)
  console.log('data', data)
  const [state, dispatch] = useReducer(reducer, initialState)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <div className='bg-secondary-light/55'>
      <CloudSvg className='hidden md:block fixed top-1/4 bottom-0 right-0 left-0 w-screen h-auto fill-current text-white ' />
      <Cloud2Svg className='block md:hidden fixed top-1/4 bottom-0 right-0 left-0 w-screen h-auto fill-current text-white ' />

      <main className='w-full min-h-screen max-w-screen-lg container mx-auto px-4'>
        <header className='py-4 w-full space-y-8'>
          <NavBar />
          <SearchInput dispatch={dispatch} books={data || []} />
        </header>{' '}
        <section className='mt-10  w-full flex justify-center'>
          {state.readingList.length > 0 ? (
            <Books dispatch={dispatch} books={state.readingList} />
          ) : (
            <div className='w-full flex flex-col justify-center items-center  space-y-6 z-10'>
              <EmptyState className='w-36 h-auto' />
              <div>
                <Typography
                  component='div'
                  variant='h6'
                  className='font-semibold text-center'
                >
                  Empty List
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='gray[400]'
                  component='div'
                >
                  search add books to you reading list.
                </Typography>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
