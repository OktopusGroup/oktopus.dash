import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Local */

import showAccountMenu from 'src/actions/showAccountMenu';

import Button from 'src/components/button';
import AccountMenu from './accountMenu';

import sass from './styles.scss';
import oktopusLogo from './img/oktopus-logo.svg';
import eyeIcon from './img/icon-eye3x.png';
import playIcon from './img/icon-play@3x.png';
import bellIcon from './img/norm.svg';
import myPic from './img/myPic.jpg';

// ----------------------

const PreviewIcon = () => (
  <div className={sass.oc_button_group}>
    <span className={sass.oc_purple_circle}>
      <img className={sass.oc_icon_eye} src={eyeIcon} alt="" />
    </span>
    <span className={sass.oc_account_button_title}>Preview</span>
  </div>
);

const LaunchIcon = () => (
  <div className={sass.oc_button_group}>
    <span className={sass.oc_green_circle}>
      <img className={sass.oc_icon_play} src={playIcon} alt="" />
    </span>
    <span className={sass.oc_account_button_title}>Launcher</span>
  </div>
);

const BellIcon = () => (
  <div className={sass.oc_button_group}>
    <img className={sass.oc_icon_bell} src={bellIcon} alt="" />
  </div>
);

const MyPicture = () => (
  <div className={sass.oc_circle_big}>
    <img className={sass.oc_picture} src={myPic} alt="" />
  </div>
);

@connect(state => ({ accountMenuShowed: state.accountMenuShowed }))
class AccountBar extends React.Component {
  static defaultProps = {
    profile: null,
    accountMenuShowed: false,
  };

  onToggleAccountMenu = () => {
    const {
      dispatch,
      accountMenuShowed,
    } = this.props;

    dispatch(showAccountMenu(!accountMenuShowed));
  }

  render() {
    const {
      profile,
      accountMenuShowed,
    } = this.props;

    const accountMenu = accountMenuShowed ?
      <AccountMenu profile={profile} /> : null;

    return (
      <div className={sass.oc_topbar}>
        <img src={oktopusLogo} alt="Oktopus" className={sass.oc_logo}/>

        <div className={sass.oc_account_button_group_center}>
          <Button className={sass.oc_account_button}>
            <PreviewIcon />
          </Button>

          <Button className={sass.oc_account_button}>
            <LaunchIcon />
          </Button>
        </div>

        <div className={sass.oc_account_button_group_right}>
          <Button className={sass.oc_account_button}>
            <BellIcon />
          </Button>

          <Button className={sass.oc_account_button} onClick={this.onToggleAccountMenu}>
            <MyPicture />
          </Button>

          {accountMenu}
        </div>
      </div>
    );
  }
}

AccountBar.propTypes = {
  profile: PropTypes.object.isRequired,
  accountMenuShowed: PropTypes.bool,
};

export default AccountBar;
