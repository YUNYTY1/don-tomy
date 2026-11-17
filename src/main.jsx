import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/bebas-neue/400.css';
import '@fontsource-variable/inter';
import '@fontsource/dancing-script/500.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
