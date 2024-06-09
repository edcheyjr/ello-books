import { Book } from '../../types/book'
import SingleBookCard from './SingleBookCard'

type Props = {
  books: Book[]
}

const Books = ({ books }: Props) => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
      {books.map((book, index) => (
        <SingleBookCard key={index + book.title + Math.random()} book={book} />
      ))}
    </section>
  )
}
export default Books
