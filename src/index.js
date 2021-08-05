import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
// esto sale de : yarn add --dev react-snap
if (root.hasChildNodes()) {
  hydrate(<App />, root);
} else {
  render(<App />, root);
}


serviceWorkerRegistration.register();


reportWebVitals();
