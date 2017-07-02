import React from 'react';
import PropTypes from 'prop-types';

/* Local */

import Button from 'src/components/button';

import sass from './styles.scss';
import myPic from './img/myPic.jpg';

// ----------------------

const LogoutText = () => (
  <div className={sass.oc_logout_button_text}>
    Logout
  </div>
);

class AccountMenu extends React.Component {
  static defaultProps = {
    profile: null,
  };

  render() {
    const {
      profile,
    } = this.props;

    return (
      <div className={sass.oc_account_menu}>
        <ul className={sass.oc_vertical_container}>
          <li>
            <div className={sass.oc_account_menu_account_name}>
              <img className={sass.oc_picture} src={myPic} alt={profile.name} />
              <span>{profile.name}</span>
            </div>
          </li>
          <li>
            <Button>
              <div className={sass.oc_account_menu_item}>
                Account Settings
              </div>
            </Button>
          </li>
          <li>
            <Button>
              <div className={sass.oc_account_menu_item}>
                Subscriptions
              </div>
            </Button>
          </li>
          <li>
            <Button>
              <div className={sass.oc_account_menu_item}>
                Billing History
              </div>
            </Button>
          </li>
          <li>
            <Button>
              <div className={sass.oc_account_menu_item}>
                Code Snippet
              </div>
            </Button>
          </li>
          <li>
            <Button>
              <div className={sass.oc_account_menu_item}>
                Support
              </div>
            </Button>
          </li>
          <li>
            <Button>
              <LogoutText />
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}

AccountMenu.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default AccountMenu;
