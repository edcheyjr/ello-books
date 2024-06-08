import { gql } from '@apollo/client'

export const GET_ALL_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`
