import { ThemeProvider } from '@mui/material/styles'
import styled from 'styled-components'
import theme from './theme'
import NavBar from './components/NavBar'
import Box from '@mui/material/Box'

const AppContainer = styled(Box)`
  display: flex;
  width: 100%;
`

const App = () => {
  // Do some stuff here
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <NavBar />
        <Box
          component="main"
          sx={{
            width: `calc(100% - 240px)`,
            ml: `240px`,
          }}
        >
          Click on the Vite and React logos to learn more
        </Box>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
