import NavBar from './components/nav-bar'
import SearchInput from './components/search-input'

function App() {
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
