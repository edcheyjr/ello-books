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
  main: '#FAAD00',
  dark: '#2BB8B8', //option two #53C2C2
  light: '#CFFAFA',
}
const theme = createTheme({
  palette: {
    primary: primaryPalette,
    secondary: secondaryPalette,
  },
  typography: {
    fontFamily: 'Mulish',
  },
})
type Props = {
  children: React.ReactNode
}
export default function Provider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
