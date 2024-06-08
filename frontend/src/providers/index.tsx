import React from 'react'
import ThemeProvider from './ThemeProvider'
import ApolloClientProvider from './ApolloClientProvider'
type Props = {
  children: React.ReactNode
}
export default function index({ children }: Props) {
  return (
    <ThemeProvider>
      <ApolloClientProvider>{children}</ApolloClientProvider>
    </ThemeProvider>
  )
}
