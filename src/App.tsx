import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import theme from './theme'
import NavBar from './components/NavBar'
import { ErrorFallback } from './components/ErrorFallbacks'
import { logError } from './utils/helpers'
import Router from './routes'

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
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={() => window.location.reload()}
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AppContainer component="main">
            <NavBar />
            <CurrentScreen component="section">
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </CurrentScreen>
          </AppContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
