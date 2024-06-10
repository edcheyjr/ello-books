import Typography from '@mui/material/Typography'
import { BookInReadingList } from '../../types/book'
import BookImageWithReadingProgress from '../book-image-with-reading-progress'
import IconButton from '@mui/material/IconButton'
type Props = {
  book: BookInReadingList
  books: BookInReadingList[]
  remove: () => void
}
import FavouriteIcon from '../../icons/Favorite'
import React from 'react'
import { findIfExists } from '../../utils/findIfExists'

const SingleBookCard: React.FC<Props> = ({ book, remove, books }: Props) => {
  const [clicked, setClicked] = React.useState(false)
  return (
    <article className='py-10 max-w-96 z-10 '>
      <div className='shadow-2xl px-2 py-2 rounded-3xl bg-primary-contrastText border-2 relative'>
        <div className='justify-center items-center flex'>
          <BookImageWithReadingProgress
            imageUrl={`${book.coverPhotoURL}`}
            className='w-4/5 -translate-y-6 hover:-translate-y-2 duration-300 ease-in-out'
            desc={book.title}
            progress={book.progress} //maybe don't put this progress
          />
        </div>
        <div className='w-full px-8 pb-2'>
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
        </div>
        <IconButton
          onMouseDown={() => setClicked(true)}
          onMouseUp={() => setClicked(false)}
          onClick={remove}
          className='group'
          aria-label={'add to reading list'}
          sx={{ position: 'absolute', bottom: '0.875rem', right: '0.5rem' }}
        >
          <FavouriteIcon
            className={`size-6 transform   
              ${
                findIfExists(book, books)
                  ? ' fill-current stroke-current text-secondary '
                  : ' fill-none '
              }
              ${
                clicked
                  ? '-translate-y-1 duration-200'
                  : 'translate-x-0 duration-500'
              } ease-in-out  `}
          />
        </IconButton>
      </div>
    </article>
  )
}

export default SingleBookCard
