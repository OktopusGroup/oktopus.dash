import React from 'react';

/* Local */

/* styles */
import sass from './styles.scss';

/* images */
import oktopusLogo from './img/oktopus-logo.svg';
import loginOrSignup1x from './img/1-pagecenter.png';
import loginOrSignup2x from './img/1-pagecenter@2x.png';
import loginOrSignup3x from './img/1-pagecenter@3x.png';

export default () => (
  <div className={sass.oc_topbar}>
    <img src={oktopusLogo} alt="Oktopus" className={sass.oc_logo} />
    <img
      className={sass.oc_login_title}
      alt="Signup or login"
      src={loginOrSignup1x}
      srcSet={`${loginOrSignup1x} 1x, ${loginOrSignup2x} 2x, ${loginOrSignup3x} 3x`} />
    <img src={oktopusLogo} alt="Dummy for justify" className={sass.oc_logo} style={{ visibility: 'hidden' }} />
  </div>
);
