import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './App.css';
import App from './App';

// Create a root container
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app within the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
