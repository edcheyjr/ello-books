import { Action, State } from '../types/book' // Assuming you have Book type defined

// Reducer function
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TO_READING_LIST': {
      const newState = {
        ...state,
        readingList: [
          ...state.readingList,
          { ...action.book, progress: Math.floor(Math.random() * 101) },
        ],
      }
      saveState(newState)
      return newState
    }
    case 'REMOVE_FROM_READING_LIST': {
      const newState: State = {
        ...state,
        readingList: state.readingList.filter(
          (book) =>
            book.title.trim() !== action.book.title.trim() &&
            book.author.trim() !== action.book.author.trim()
        ),
      }
      saveState(newState)
      return newState
    }
    case 'FILTER_READING_LIST': {
      const newState: State = {
        ...state,
        activeFilter: action.bookLevel.toUpperCase(),
      }
      saveState(newState)
      return newState
    }

    case 'REMOVE_FILTERS': {
      const newState: State = {
        ...state,
        activeFilter: null,
      }
      saveState(newState)
      return newState
    }

    default:
      return state
  }
}
// Function to save state to localStorage
const saveState = (state: State) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('readingListState', serializedState)
  } catch (err) {
    console.error('Error saving state to localStorage:', err)
  }
}

// Function to load state from localStorage
export const loadState = (): State | undefined => {
  try {
    const serializedState = localStorage.getItem('readingListState')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.error('Error loading state from localStorage:', err)
    return undefined
  }
}
