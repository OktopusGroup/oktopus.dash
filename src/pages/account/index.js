import React from 'react';

/* Local */

import TopBar from 'src/components/topBar';

import sass from './styles.scss';

// ----------------------

export default () => (
  <div className={sass.oc_account_container}>
    <TopBar profile={{
      name: 'test',
    }} />
  </div>
);
