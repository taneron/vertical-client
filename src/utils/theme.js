import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: '#7c88cc',
      main: '#1CAA53',
      // dark: '#404a86',
      // contrastText: '#fff',
    },
    secondary: {
      // light: '#ffd453',
      main: '#F5B202',
      // dark: '#b28d1c',
      // contrastText: '#000',
    },
    common: {
      black: '#1C1D1E',
      white: '#EDEFF4',
    },
  },
  text: {
    primary: '#EDEFF4',
  },
})

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
