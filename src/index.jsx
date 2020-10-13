import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import AppShell from './components/app-shell/app-shell';
import * as serviceWorker from './sw';
import routes from './routes';
import './styles.css';

const root = document.getElementById('root');

function render(Component) {
  ReactDOM.render(<Component routes={routes} />, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

render(AppShell);

if (module.hot) {
  module.hot.accept('./components/app-shell/app-shell', () => {
    const NextApp = require('./components/app-shell/app-shell').default;
    render(NextApp);
  })
}
