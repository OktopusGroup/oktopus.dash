import React from 'react';
import PropTypes from 'prop-types';

/* Local */

import sass from 'src/styles.scss';

// ----------------------

class Button extends React.Component {
  static defaultProps = {
    children: null,
    className: sass.oc_button,
    tabIndex: 0,
    onClick: null,
  };

  render() {
    const {
      children,
      className,
      tabIndex,
      onClick,
    } = this.props;

    return (
      <span className={className} role="button" aria-pressed="true" tabIndex={tabIndex} onClick={onClick}>
        {children}
      </span>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tabIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
};

export default Button;
