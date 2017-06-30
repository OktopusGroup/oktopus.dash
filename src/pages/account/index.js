import React from 'react';
import PropTypes from 'prop-types';

import TopBar from 'src/components/topBar';

/* Local */

import sass from './styles.scss';

// ----------------------

class Account extends React.Component {
  render() {
    return (
      <div className={sass.oc_container_white}>
        <TopBar profile={{
          name: 'test',
        }} />
      </div>
    );
  }
}

Account.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default Account;
