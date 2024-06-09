import Typography from '@mui/material/Typography'
import { Book } from '../../types/book'
import BookImageWithReadingProgress from '../book-image-with-reading-progress'

type Props = {
  book: Book
}

const SingleBookCard = ({
  book: { title, author, coverPhotoURL, readingLevel },
}: Props) => {
  return (
    <article className='py-10 max-w-96 z-10'>
      <div className='shadow-2xl px-2 py-2 rounded-3xl bg-primary-contrastText border-2'>
        <div className='justify-center items-center flex'>
          <BookImageWithReadingProgress
            imageUrl={`${coverPhotoURL}`}
            className='w-4/5 -translate-y-6 hover:-translate-y-2 duration-300 ease-in-out'
            desc={title}
            progress={Math.floor(Math.random() * 100)} //maybe don't put this progress
          />
        </div>
        <div className='w-full px-8 pb-2'>
          <Typography component='div' variant='h6' className='font-semibold'>
            {title}
          </Typography>
          <Typography
            variant='subtitle1'
            color='secondary.dark'
            component='div'
          >
            By {author}
          </Typography>
        </div>
      </div>
    </article>
  )
}

export default SingleBookCard
