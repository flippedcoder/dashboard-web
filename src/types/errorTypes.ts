export type ErrorFallbackProps = {
  error: {
    message: string
    name: string
  }
  resetErrorBoundary: () => void
}
