import React from 'react';
import PropTypes from 'prop-types';

/* Local */

import UnloggedinBar from './unloggedinBar';
import AccountBar from './accountBar';

import sass from './styles.scss';

// ----------------------

class TopBar extends React.Component {
  static defaultProps = {
    profile: null,
  };

  render() {
    const {
      profile,
    } = this.props;

    const content = profile ? <AccountBar profile={profile} /> : <UnloggedinBar />;

    return (
      <div className={sass.oc_horizontal_container}>
        {content}
      </div>
    );
  }
}

TopBar.propTypes = {
  profile: PropTypes.object,
};

export default TopBar;
