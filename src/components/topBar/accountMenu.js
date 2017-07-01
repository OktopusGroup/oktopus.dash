import React from 'react';
import PropTypes from 'prop-types';

/* Local */

import Button from 'src/components/button';

import sass from './styles.scss';

// ----------------------

class AccountMenu extends React.Component {
  render() {
    return (
      <div className={sass.oc_account_menu}>
        <ul>
          <li>FounderMan</li>
          <li>
            <Button>
              <div className={sass.oc_account_menu_account_name}>
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
        </ul>
      </div>
    );
  }
}

AccountMenu.propTypes = {
};

export default AccountMenu;
