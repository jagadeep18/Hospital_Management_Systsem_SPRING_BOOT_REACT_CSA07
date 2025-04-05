import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Mounting React application...');
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find root element');

console.log('Root element found:', rootElement);
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
