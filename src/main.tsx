// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import local dependencies
import App from '@/App';

// Import styles
import './assets/scss/custom.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
