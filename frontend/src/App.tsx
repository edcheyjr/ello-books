import { useQuery } from '@apollo/client'
import NavBar from './components/nav-bar'
import SearchInput from './components/search-input'
import { GET_ALL_BOOKS } from './services/getBooks'
import { Book, State } from './types/book'
import Books from './components/books'
import CloudSvg from './svg/cloud-svg'
import Cloud2Svg from './svg/cloud-small-svg'
import { useReducer } from 'react'
import { loadState, reducer } from './utils/bookReducer'
import EmptyState from './svg/empty-state'
import Typography from '@mui/material/Typography'
import Loader from './icons/Loader'
import ServerErrorState from './svg/server-error-state/Svg'
import { alphabetArray } from './utils/alphabetArray'

function App() {
  const initialState: State = loadState() || {
    readingList: [],
  }

  const { loading, error, data } = useQuery<{ books: Book[] }>(GET_ALL_BOOKS)
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='bg-secondary-light/55 overflow-x-hidden'>
      <CloudSvg className='hidden md:block fixed top-1/4 bottom-0 right-0 left-0 w-screen h-auto fill-current text-white ' />
      <Cloud2Svg className='block md:hidden fixed top-[20%] bottom-0 right-0 left-0 w-screen h-auto fill-current text-white ' />

      <main className='w-full min-h-screen max-w-screen-lg container mx-auto px-4 md:px-6 lg:px-10'>
        <header className='py-4 w-full space-y-8'>
          <NavBar />
          <SearchInput
            state={state}
            dispatch={dispatch}
            books={data?.books || []}
          />
        </header>{' '}
        {loading ? (
          <div className='w-full h-full flex items-center justify-center pt-12'>
            <Loader className='animate-spin size-8 stroke-current text-secondary-dark' />
          </div>
        ) : error ? (
          <section className='mt-10  w-full flex justify-center'>
            <div className='w-full flex flex-col justify-center items-center  space-y-6 z-10'>
              <ServerErrorState className='w-40 h-auto' />
              <div>
                <Typography
                  component='div'
                  variant='h6'
                  className='font-semibold text-center'
                >
                  Server Error
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='gray[400]'
                  component='div'
                >
                  Oops🥲, something went wrong with the server.
                </Typography>
              </div>
            </div>
          </section>
        ) : (
          <section className='mt-6 w-full'>
            <div className='flex flex-wrap items-center gap-3 mb-3 px-2'>
              <p className='z-10 px-1.5 py-0.5 mr-2 rounded bg-secondary-dark text-primary-contrastText'>
                Filter levels
              </p>
              {alphabetArray().map((item, index) => {
                return (
                  <button
                    key={item + index}
                    className='z-10 group text-secondary-dark hover:bg-primary-light p-1 rounded duration-200 ease-in-out font-semibold'
                  >
                    <span className='group-hover:-translate-y-2 uppercase transform'>
                      {item}
                    </span>
                  </button>
                )
              })}
            </div>
            <div className='flex justify-center'>
              {state.readingList.length > 0 ? (
                <Books
                  dispatch={dispatch}
                  books={state.readingList.reverse()}
                />
              ) : (
                <div className='w-full flex flex-col justify-center items-center  space-y-6 z-10'>
                  <EmptyState className='w-40 h-auto' />
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
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
