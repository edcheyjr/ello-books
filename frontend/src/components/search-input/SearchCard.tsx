import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Action, Book, State } from '../../types/book'
import BookImageWithReadingProgress from '../book-image-with-reading-progress'
import FavoriteIcon from '../../icons/Favorite'
import { findIfExists } from '../../utils/findIfExists'

type Props = {
  book: Book
  state: State
  dispatch: React.Dispatch<Action>
}
export default function SearchCard({ book, state, dispatch }: Props) {
  const [clicked, setClicked] = React.useState(false)
  const toggleAddToList = (book: Book) => {
    if (findIfExists(book, state.readingList)) {
      dispatch({ type: 'REMOVE_FROM_READING_LIST', book })
    } else {
      dispatch({ type: 'ADD_TO_READING_LIST', book })
    }
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
          <Typography variant='overline'>level {book.readingLevel}</Typography>
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
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        className='group'
        onClick={(e) => {
          e.stopPropagation()
          toggleAddToList(book)
        }}
        title={findIfExists(book, state.readingList) ? 'remove' : 'add'}
        aria-label={'add to reading list'}
        sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
      >
        <FavoriteIcon
          className={`size-6 transform ${
            findIfExists(book, state.readingList)
              ? 'fill-current stroke-current text-secondary'
              : 'fill-none'
          } ${
            clicked
              ? '-translate-y-1 duration-200'
              : 'translate-x-0 duration-500'
          } ease-in-out  `}
        />
      </IconButton>
    </Card>
  )
}
