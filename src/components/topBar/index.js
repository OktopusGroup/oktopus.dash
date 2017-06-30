import React from 'react';
import PropTypes from 'prop-types';

import LoginNeeded from './loginNeeded';
import Account from './account';

/* Local */

class TopBar extends React.Component {
  static defaultProps = {
    profile: null,
  };

  render() {
    const {
      profile,
    } = this.props;

    const content = profile ? <Account /> : <LoginNeeded />;

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
