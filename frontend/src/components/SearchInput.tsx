import Input from '@mui/material/Input'
import IconSearch from '../icons/Search'

// type Props = {}
const SearchInput = () => {
  return (
    <Input
      className='py-4 group'
      id='demo-helper-text-aligned'
      placeholder='search for books ...'
      startAdornment={<IconSearch className='text-gray-800 size-7 mr-2' />}
    />
  )
}

export default SearchInput
