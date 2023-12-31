import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import '../src/assets/scss/app.scss'

// third-party

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <StrictMode>
      <HashRouter>
          <App />
      </HashRouter>
  </StrictMode>
);