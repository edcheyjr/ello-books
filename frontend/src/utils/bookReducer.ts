import { Action, State } from '../types/book'
export const ADD_TO_READING_LIST = 'ADD_TO_READING_LIST' as const
export const REMOVE_FROM_READING_LIST = 'ADD_TO_READING_LIST' as const

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TO_READING_LIST': {
      return {
        ...state,
        readingList: [
          ...state.readingList,
          { ...action.book, progress: Math.floor(Math.random() * 101) },
        ],
      }
    }
    case 'REMOVE_FROM_READING_LIST':
      return {
        ...state,
        readingList: state.readingList.filter(
          (book) =>
            book.title.trim() !== action.book.title.trim() &&
            book.author.trim() !== action.book.author.trim()
        ),
      }
    default:
      return state
  }
}
