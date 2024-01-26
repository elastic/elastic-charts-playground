import { render } from 'react-dom';
import { EuiProvider } from '@elastic/eui';

import '@elastic/charts/dist/theme_light.css';
import '@elastic/eui/dist/eui_theme_light.css';
import './styles.css';

import App from './App';

const rootElement = document.getElementById('root');

render(
  <EuiProvider colorMode="light">
    <App />
  </EuiProvider>,
  rootElement,
);
