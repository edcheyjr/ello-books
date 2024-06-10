import { Action, Book } from '../../types/book'
import SingleBookCard from './SingleBookCard'

type Props = {
  books: Book[]
  dispatch: React.Dispatch<Action>
}

export default function Books({ books, dispatch }: Props) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
      {books.map((book, index) => (
        <SingleBookCard
          key={index + book.title + Math.random()}
          book={book}
          remove={() =>
            dispatch({ type: 'REMOVE_FROM_READING_LIST', title: book.title })
          }
        />
      ))}
    </section>
  )
}
