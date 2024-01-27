import { createTheme } from '@mui/material/styles'
import { colors } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[900],
    },
    secondary: {
      main: colors.orange[400],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#4C4C4C',
          borderRadius: '4px',
          background: '#B4CD93',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F2F2F2',
          boxSizing: 'border-box',
          width: '240px',
        },
      },
    },
  },
})

export default theme
