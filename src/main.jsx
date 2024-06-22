import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import posthog from 'posthog-js'
import { PostHogProvider} from 'posthog-js/react'

posthog.init(import.meta.env.VITE_POSTHOG_KEY,
  {
      api_host: import.meta.env.VITE_POSTHOG_HOST,
      capture_pageview:false,
      persistence: 'localStorage',
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
)

