import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

import sass from './styles.scss';
import oktopusLoginLogo1x from './img/screen-shot-2017-02-11-at-7-08-42-pm.png';
import oktopusLoginLogo2x from './img/screen-shot-2017-02-11-at-7-08-42-pm@2x.png';
import oktopusLoginLogo3x from './img/screen-shot-2017-02-11-at-7-08-42-pm@3x.png';
import faceBook from './img/face-book.svg';
import linkedIn from './img/linked-in.svg';
import loginText from './img/login.png';
import login2xText from './img/login@2x.png';
import login3xText from './img/login@3x.png';

const LoginText = () => (
  <div>
    <img
      src={loginText}
      srcSet={`${loginText} 1x, ${login2xText} 2x, ${login3xText} 3x`}
      className={sass.oc_login_button_text}
      alt="Login"
    />
  </div>
);

export default class Box extends React.Component {
  render() {
    return (
      <div className={sass['combined-shape']}>
        <img
          src={oktopusLoginLogo1x}
          srcSet={`${oktopusLoginLogo1x} 1x, ${oktopusLoginLogo2x} 2x, ${oktopusLoginLogo3x} 3x`}
          className={sass['screen-shot-2017-02-11-at-7-08-42-pm']}
          alt="Oktopus"
        />

        <div className={sass.oc_login_inputs}>
          <TextField
            placeholder="Email Field"
          />

          <TextField
            placeholder="Password Field"
            type="password"
          />
        </div>

        <div className={sass.oc_login_socials}>
          <img
            src={faceBook}
            className={sass.face_book}
            alt="Facebook" />

          <img
            src={linkedIn}
            className={sass.linked_in}
            alt="Linked In" />
        </div>

        <div className={sass.oc_login_inputs}>
          <div>
            <Button
              className={sass.oc_login_button}
            >
              <LoginText />
            </Button>
          </div>

          <div>
            <Button
              className={sass.oc_login_forgot}
            >
              Forgot?
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Box.propTypes = {
};
