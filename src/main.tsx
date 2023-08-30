import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import '../src/assets/scss/app.scss'

// third-party

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
          <App />
      </BrowserRouter>
  </StrictMode>
);