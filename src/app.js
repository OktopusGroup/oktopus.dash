// ----------------------
// IMPORTS

/* NPM */

// React
import React from 'react';
import Helmet from 'react-helmet';

// Routing
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// Pages
import Login from 'src/pages/login';

// Material Design for React
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette, { light } from 'material-ui/styles/palette';
import { orange, deepOrange, red } from 'material-ui/styles/colors';

/* Local */

// NotFound 404 handler for unknown routes
import { NotFound } from 'kit/lib/routing';

// Images
import oktopusLogo from 'src/images/oktopus.png';

// CSS
import './styles.global.scss';
import css from './styles.scss';

// ----------------------

const Home = () => (
  <div className={css.logo}>
    <img src={oktopusLogo} alt="Oktopus" />
  </div>
);

// Create a route that will be displayed when the code isn't found
const WhenNotFound = () => (
  <NotFound>
    <h1>Unknown route - the 404 handler was triggered!</h1>
  </NotFound>
);

light.input.bottomLine = '#FF825C';
light.input.disabled = '#ff4000';
light.text.primary = '#FF825C';

const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: orange,
    accent: deepOrange,
    error: red,
    type: 'light',
  }),
});

export default () => (
  <div className={css.container}>
    <Helmet
      title="Oktopus"
      meta={[{
        name: 'description',
        content: 'Oktopus front-end',
      }]} />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/page/login">Login</Link></li>
    </ul>
    <MuiThemeProvider theme={muiTheme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page/login" component={Login} />
        <Route component={WhenNotFound} />
      </Switch>
    </MuiThemeProvider>
  </div>
);
