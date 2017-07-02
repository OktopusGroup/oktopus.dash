import React from 'react';
import PropTypes from 'prop-types';

/* Local */

import TopBar from 'src/components/topBar';

import sass from './styles.scss';

// ----------------------

class Account extends React.Component {
  render() {
    return (
      <div className={sass.oc_account_container}>
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
