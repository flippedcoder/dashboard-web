import { ErrorFallbackProps } from '../types/errorTypes'

export const logError = (error: ErrorFallbackProps['error']) => {
  // you should really be logging to some external tool
  // do not log real errors to the console
  console.log(error.message)
}
