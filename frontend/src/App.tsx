import { useQuery } from '@apollo/client'
import NavBar from './components/nav-bar'
import SearchInput from './components/search-input'
import { GET_ALL_BOOKS } from './services/getBooks'
import { Book } from './types/book'
import Books from './components/books'
import CloudSvg from './svg/cloud-svg'
import Cloud2Svg from './svg/cloud-small-svg'

function App() {
  const { loading, error, data } = useQuery<Book[]>(GET_ALL_BOOKS)
  console.log('data', data)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <div className='bg-secondary-light/50'>
      <CloudSvg className='hidden md:block fixed top-1/4 bottom-0 right-0 left-0 w-screen h-auto fill-current text-white ' />
      <Cloud2Svg className='block md:hidden fixed top-1/4 bottom-0 right-0 left-0 w-screen h-auto fill-current text-white ' />

      <main className='w-full min-h-screen max-w-screen-lg container mx-auto px-4'>
        <header className='py-4 w-full space-y-8'>
          <NavBar />
          <SearchInput />
        </header>{' '}
        <section className='mt-10 z-[1000] w-full flex justify-center'>
          <Books
            books={[
              {
                title: 'Curious Princess and the Enchanted Garden',
                author: 'Reese Smith',
                coverPhotoURL: 'assets/image2.webp',
                readingLevel: 'H',
              },
              {
                title: 'Clever Monster on the Wonder Island',
                author: 'Jordan Jones',
                coverPhotoURL: 'assets/image10.webp',
                readingLevel: 'I',
              },
              {
                title: 'Happy Knight and the Magic Spell',
                author: 'Quinn Brown',
                coverPhotoURL: 'assets/image10.webp',
                readingLevel: 'I',
              },
              {
                title: 'Happy Dragon and the Magic Spell',
                author: 'Alex Jones',
                coverPhotoURL: 'assets/image6.webp',
                readingLevel: 'A',
              },
            ]}
          />
        </section>
      </main>
    </div>
  )
}

export default App
