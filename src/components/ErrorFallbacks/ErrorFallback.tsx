import { Box, Button, Typography } from '@mui/material'
import { ErrorFallbackProps } from '../../types/errorTypes'
import datadogLogger from '../../utils/loggers/datadog'

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  datadogLogger.error(error.message)
  return (
    <Box
      margin="24px auto"
      role="alert"
      display="flex"
      flexDirection="column"
      gap="24px"
      textAlign="center"
    >
      <Typography variant="h2">Something weird happened</Typography>
      <Typography variant="h3">This is what it was:</Typography>
      <Typography color="tomato" variant="body1">
        {error.message}
      </Typography>
      <Button variant="contained" onClick={resetErrorBoundary}>
        Refresh the page to try again
      </Button>
    </Box>
  )
}

export default ErrorFallback
