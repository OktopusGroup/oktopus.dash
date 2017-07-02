import React from 'react';

/* Local */

/* components */
import TopBar from 'src/components/topBar';
import Box from './box';

/* styles */
import sass from './styles.scss';

// ----------------------

export default () => (
  <div className={sass.oc_login_container}>
    <TopBar profile={null} />

    <div className={sass.oc_vertical_container}>
      <div className={sass.oc_login_where_platforms_are_born}>
        Where platforms are born.
      </div>

      <Box />
    </div>
  </div>
);
