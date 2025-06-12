import * as hasOwn from 'object.hasown';
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

if (!Object.hasOwn) {
  hasOwn.shim();
}

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictApp />);
} else {
  const root = createRoot(rootElement);
  root.render(<StrictApp />);
}
