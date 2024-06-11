import { Action, BookInReadingList } from '../../types/book'
import SingleBookCard from './SingleBookCard'

type Props = {
  books: BookInReadingList[]
  dispatch: React.Dispatch<Action>
}

export default function Books({ books, dispatch }: Props) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
      {books.map((book, index) => (
        <SingleBookCard
          key={index + book.title + Math.random()}
          book={book}
          books={books}
          remove={() => dispatch({ type: 'REMOVE_FROM_READING_LIST', book })}
        />
      ))}
    </section>
  )
}
