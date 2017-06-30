import React from 'react';
import PropTypes from 'prop-types';

/* Local */

import sass from 'src/styles.global.scss';

// ----------------------

class Button extends React.Component {
  static defaultProps = {
    className: sass.oc_button,
    children: null,
  };

  render() {
    const {
      className,
      children,
    } = this.props;

    return (
      <span className={className}>
        {children}
      </span>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
