import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Action, Book } from '../../types/book'
import BookImageWithReadingProgress from '../book-image-with-reading-progress'
import BookmarkAdd from '../../icons/BookMark'
type Props = {
  book: Book
  dispatch: React.Dispatch<Action>
}
export default function SearchCard({ book, dispatch }: Props) {
  const addToReadingList = (book: Book) => {
    dispatch({ type: 'ADD_TO_READING_LIST', book })
  }

  return (
    <Card
      className='relative border border-gray-300 hover:border-primary ease-in-out duration-200'
      sx={{
        display: 'flex',
        // border: '2px solid',
        alignItems: 'center',
        padding: '1rem 1.5rem ',
      }}
      elevation={0}
      // className='hover:bg-secondary/10'
    >
      <BookImageWithReadingProgress
        imageUrl={`${book.coverPhotoURL}`}
        className='w-[10%] hidden md:block'
        desc={book.title}
        progress={0}
        bookSize='sm'
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyItems: 'start',
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h6' className='font-semibold'>
            {book.title}
          </Typography>
          <Typography
            variant='subtitle1'
            color='secondary.dark'
            component='div'
          >
            By {book.author}
          </Typography>
        </CardContent>
      </Box>
      <IconButton
        className='group'
        onClick={() => addToReadingList(book)}
        aria-label={'add to reading list'}
        sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
      >
        <BookmarkAdd className='size-6 group-hover:-translate-y-0.5 ease-in-out duration-200' />
      </IconButton>
    </Card>
  )
}
