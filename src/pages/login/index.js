import React from 'react';
import PropTypes from 'prop-types';

import oktopusLogo from './img/oktopus-logo.svg';
import oktopusLoginLogo1x from './img/screen-shot-2017-02-11-at-7-08-42-pm.png';
import oktopusLoginLogo2x from './img/screen-shot-2017-02-11-at-7-08-42-pm@2x.png';
import oktopusLoginLogo3x from './img/screen-shot-2017-02-11-at-7-08-42-pm@3x.png';
import pagecenter1 from './img/1-pagecenter@3x.png';
import sass from './styles.scss';

export default class Login extends React.Component {
  render() {
    return (
      <div className={sass.rectangle}>
        <div className={sass['topbar-bg']}>
          <img src={oktopusLogo} alt="Oktopus" className={sass['oktopus-logo']} />
          <img src={pagecenter1} alt="Signup or login" className={sass['pagecenter-1']} />
        </div>

        <div className={sass['your-website-is-about']}>
          Your website is about to be reborn.
        </div>

        <div className={sass['combined-shape']}>
          <img
            src={oktopusLoginLogo1x}
            srcSet={`${oktopusLoginLogo1x} 1x, ${oktopusLoginLogo1x} 2x, ${oktopusLoginLogo3x} 3x`}
            className={sass['screen-shot-2017-02-11-at-7-08-42-pm']}
            alt="Oktopus"
          />
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
