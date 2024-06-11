export interface Book {
  title: string
  author: string
  coverPhotoURL: string
  readingLevel: string
}

export interface BookInReadingList extends Book {
  progress: number
}

export interface State {
  activeFilter: null | string
  readingList: BookInReadingList[]
}

export type Action =
  | { type: 'ADD_TO_READING_LIST'; book: Book }
  | { type: 'REMOVE_FROM_READING_LIST'; book: Book }
  | { type: 'FILTER_READING_LIST'; bookLevel: string }
  | { type: 'REMOVE_FILTERS' }
