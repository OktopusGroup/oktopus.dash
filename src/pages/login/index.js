import React from 'react';
import PropTypes from 'prop-types';

import Box from './box';

import oktopusLogo from './img/oktopus-logo.svg';
import pagecenter1 from './img/1-pagecenter@3x.png';
import sass from './styles.scss';

class Login extends React.Component {
  render() {
    return (
      <div className={sass.oc_login_container}>
        <div className={sass.oc_container_topbar}>
          <img src={oktopusLogo} alt="Oktopus" className={sass.oc_logo} />
          <img src={pagecenter1} alt="Signup or login" className={sass.oc_login_title} />
          <img src={oktopusLogo} alt="Dummy for justify" className={sass.oc_logo} style={{ visibility: 'hidden' }} />
        </div>
        <div className={sass.oc_container_content}>
          <div className={sass.oc_login_title2}>
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
