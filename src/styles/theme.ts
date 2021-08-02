import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {      
      "600": "#47585B",      
      "400": "#999999",
      "300": "#DADADA",      
      "100": "#F5F8FA"      
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.600',
      }
    }
  }
})