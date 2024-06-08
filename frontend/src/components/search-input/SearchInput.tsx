import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Book } from '../../types/book'

// type Props = {
//   books: Book[]
// }
const SearchInput = () => {
  const books: Book[] = [
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
  ]
  return (
    <div>
      <Autocomplete
        size='medium'
        componentsProps={{
          paper: {
            sx: {
              width: '100%',
              margin: 'auto',
            },
          },
        }}
        id='Hello'
        getOptionLabel={(book) => book.title}
        options={books}
        noOptionsText='No results'
        isOptionEqualToValue={(option, value) => {
          return option.title === value.title
        }}
        renderOption={(props, book) => (
          <Box component='li' {...props} key={book.title + Math.random()}>
            {/* {book.name} - Ahhh */}
            {/* TODO pass search card here */}
            {book.title}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
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
                background: 'white',
              },
            }}
          />
        )}
      />
    </div>
  )
}

export default SearchInput
