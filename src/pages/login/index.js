import React from 'react';
import PropTypes from 'prop-types';

import oktopusLogo from './img/oktopus-logo.svg';
import _1Pagecenter from './img/1-pagecenter.svg';
import sass from './styles.scss';

export default class Login extends React.Component {
  render() {
    return (
      <div className={sass.rectangle}>
        <div className={sass.topbarBg}>
          <img src={oktopusLogo} alt="Oktopus" className={sass.oktopusLogo} />
          <img src={_1Pagecenter} alt="Signup or login" className={sass._1Pagecenter} />
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
