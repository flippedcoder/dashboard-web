import { datadogLogs } from '@datadog/browser-logs'

datadogLogs.init({
  clientToken: import.meta.env.DATADOG_CLIENT_TOKEN,
  site: import.meta.env.DATADOG_SITE,
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
})

const datadogLogger = datadogLogs.logger

export default datadogLogger
