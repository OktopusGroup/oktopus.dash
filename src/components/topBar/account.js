import React from 'react';

import Button from 'src/components/button';

/* Local */

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

export default () => (
  <div className={sass.oc_container_topbar}>
    <img src={oktopusLogo} alt="Oktopus" className={sass.oc_logo} />

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

      <Button className={sass.oc_account_button}>
        <MyPicture />
      </Button>
    </div>
  </div>
);
