import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PostHogProvider } from 'posthog-js/react';

import './styles/simple-grid.css';
import './styles/globals.scss';
import './styles/layout.scss';

import App from './App.tsx';

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2025-11-30',
} as const

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={options}>
      <div className="content-container">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    </PostHogProvider>
  </StrictMode>,
)
