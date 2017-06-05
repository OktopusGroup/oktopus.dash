// ----------------------
// IMPORTS

/* NPM */

// React
import React from 'react';
import Helmet from 'react-helmet';

/* Local */

// CSS
import './styles.global.scss';
import css from './styles.scss';

// ----------------------

export default () => (
  <div className={css.container}>
    <Helmet
      title="Oktopus"
      meta={[{
        name: 'description',
        content: 'Oktopus front-end',
      }]} />
    <div className={css.logo}>
      <h1>Oktopus</h1>
      <h2>Coming soon</h2>
    </div>
  </div>
);
