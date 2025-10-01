import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/simple-grid.css';
import './styles/globals.scss';
import './styles/layout.scss';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="content-container">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </StrictMode>,
)
