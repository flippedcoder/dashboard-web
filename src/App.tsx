import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

  @media (max-width: 500px) {
    margin-left: 0;
    width: 100%;
  }
`
// Create a client
const queryClient = new QueryClient()

const App = () => {
  // Do some stuff here
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppContainer component="main">
          <NavBar />
          <CurrentScreen component="section">
            <RouterProvider router={router} />
          </CurrentScreen>
        </AppContainer>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
