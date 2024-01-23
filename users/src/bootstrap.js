import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';

const mount = (el) => {
  ReactDOM
    .createRoot(el)
    .render(<App />)
}

if (process.env.NODE_ENV == 'development') {
  const root = document.getElementById('usersWrapper');

  if (root) {
    mount(root);
  }
}

export { mount };
