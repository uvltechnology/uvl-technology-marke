import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import '@github/spark/spark'

import App from './App.jsx'
import { ErrorFallback } from './ErrorFallback.jsx'

import './main.css'
import './styles/theme.css'
import './index.css'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element with id "root" not found')
}

createRoot(rootEl).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <App />
  </ErrorBoundary>
)
