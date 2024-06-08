import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

type Props = { children: React.ReactNode }

const ApolloClientProvider = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloClientProvider
