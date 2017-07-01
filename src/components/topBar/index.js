import React from 'react';
import PropTypes from 'prop-types';

/* Local */

import UnloggedinBar from './unloggedinBar';
import AccountBar from './accountBar';

// ----------------------

class TopBar extends React.Component {
  static defaultProps = {
    profile: null,
  };

  render() {
    const {
      profile,
    } = this.props;

    const content = profile ? <AccountBar /> : <UnloggedinBar />;

    return (
      <div>
        {content}
      </div>
    );
  }
}

TopBar.propTypes = {
  profile: PropTypes.object,
};

export default TopBar;
