import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { RouterProvider } from 'react-router-dom'
import styled from 'styled-components'
import theme from './theme'
import NavBar from './components/NavBar'
import router from './routes'

const AppContainer = styled(Box)`
  display: flex;
`

const CurrentScreen = styled(Box)`
  width: calc(100% - 240px);
  margin-left: 240px;
`

const App = () => {
  // Do some stuff here
  return (
    <ThemeProvider theme={theme}>
      <AppContainer component="main">
        <NavBar />
        <CurrentScreen component="section">
          <RouterProvider router={router} />
        </CurrentScreen>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
