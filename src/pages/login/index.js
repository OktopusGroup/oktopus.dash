import React from 'react';
import PropTypes from 'prop-types';

/* Local */

import TopBar from 'src/components/topBar';
import Box from './box';

import sass from './styles.scss';

// ----------------------

class Login extends React.Component {
  render() {
    return (
      <div className={sass.oc_login_container}>
        <TopBar profile={null} />

        <div className={sass.oc_container_content}>
          <div className={sass.oc_login_where_platforms_are_born}>
            Where platforms are born.
          </div>

          <Box />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default Login;
