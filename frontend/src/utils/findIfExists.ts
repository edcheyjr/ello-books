import { Book, BookInReadingList } from '../types/book'

export function findIfExists(
  book: Book,
  readingList: BookInReadingList[]
): boolean {
  return readingList.some(
    (item) => item.title === book.title && item.author === book.author
  )
}
