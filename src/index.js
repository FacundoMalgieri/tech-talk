import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './HookComponent';
// import App from './ClassComponent';

ReactDOM.render(
  <App messageProps='from props'/>,
  document.getElementById('root')
);

serviceWorker.unregister();
