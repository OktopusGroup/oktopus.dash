import React from 'react';
import PropTypes from 'prop-types';

import Box from './box';

import oktopusLogo from './img/oktopus-logo.svg';
import pagecenter1 from './img/1-pagecenter@3x.png';
import sass from './styles.scss';

class Login extends React.Component {
  render() {
    return (
      <div className={sass.rectangle}>
        <div className={sass[ 'topbar-bg' ]}>
          <img src={oktopusLogo} alt="Oktopus" className={sass[ 'oktopus-logo' ]}/>
          <img src={pagecenter1} alt="Signup or login" className={sass[ 'pagecenter-1' ]}/>
        </div>
        <div className={sass[ 'your-website-is-about' ]}>
          Your website is about to be reborn.
        </div>
        <Box />
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
