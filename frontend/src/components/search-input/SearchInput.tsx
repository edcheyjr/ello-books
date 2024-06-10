import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Action, Book } from '../../types/book'
import InputAdornment from '@mui/material/InputAdornment'
import Search from '../../icons/Search'
import SearchCard from './SearchCard'
import { useState } from 'react'
type Props = {
  books: Book[]
  dispatch: React.Dispatch<Action>
}
const SearchInput = ({ books, dispatch }: Props) => {
  const [popperOpened, setPoppoverOpened] = useState(false)
  return (
    <div className='group'>
      {/* Overlay */}
      {popperOpened ? (
        <div
          className={`fixed bg-black/25 w-full h-full inset-0 z-40 transition-opacity ease-in-out backdrop-blur-[3px]`}
        />
      ) : null}
      <Autocomplete
        className='z-50 scrollbar rounded-3xl scrollbar-track-secondary/10 scrollbar-thumb-secondary shadow-2xl'
        size='medium'
        onOpen={() => setPoppoverOpened(true)}
        onClose={() => setPoppoverOpened(false)}
        componentsProps={{
          paper: {
            sx: {
              width: '100%',
              margin: 'auto',
            },
          },
          popper: {
            sx: {
              boxShadow: 6,
            },
          },
          popupIndicator: {},
        }}
        id='Hello'
        freeSolo={true}
        getOptionLabel={(book) =>
          typeof book !== 'string' ? book.title : book
        }
        options={books}
        noOptionsText='No results'
        isOptionEqualToValue={(option, value) => {
          return option.title === value.title
        }}
        renderOption={(props, book) => (
          <Box
            component='li'
            {...props}
            key={book.title + Math.random()}
            className='px-4 py-2.5'
          >
            {/* {book.name} - Ahhh */}
            {/* TODO pass search card here */}
            <SearchCard book={book} dispatch={dispatch} />
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            className='w-full z-50'
            {...params}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position='start' className='ml-2'>
                  {' '}
                  <Search className='size-6 stroke-2 group-focus-within:text-primary' />{' '}
                </InputAdornment>
              ),
              endAdornment: null,
              className:
                'bg-primary-light group-focus-within:bg-primary-contrastText',
            }}
            placeholder='Search for books...'
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
                legend: {
                  marginLeft: '30px',
                },
              },
              '& .MuiAutocomplete-inputRoot': {
                paddingLeft: '20px !important',
                borderRadius: '50px',
              },
              '& .MuiInputLabel-outlined': {
                paddingLeft: '20px',
              },
              '& .MuiInputLabel-shrink': {
                marginLeft: '20px',
                paddingLeft: '10px',
                paddingRight: 0,
              },
            }}
          />
        )}
      />
    </div>
  )
}

export default SearchInput
