import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // If you’re using tailwind or custom CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);