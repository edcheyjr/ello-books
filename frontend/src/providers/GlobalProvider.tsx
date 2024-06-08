import { PaletteColorOptions } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'
const primaryPalette: PaletteColorOptions = {
  main: '#54CCCC',
  dark: '#335C6E',
  light: '#FABD33',
  contrastText: '#FFFFFF',
}
const secondaryPalette: PaletteColorOptions = {
  main: '#CFFAFA',
  dark: '#53C2C2', //option two #2BB8B8
  light: '#FAAD00',
}
const theme = createTheme({
  palette: {
    primary: primaryPalette,
    secondary: secondaryPalette,
  },
})
type Props = {
  children: React.ReactNode
}
export default function Provider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
