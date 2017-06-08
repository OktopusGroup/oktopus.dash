// ----------------------
// IMPORTS

/* NPM */

// React
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

/* Local */

// Actions
import changeColour from 'src/actions/change-colour';

// Images
import oktopusLogo from 'src/images/oktopus.png';

// CSS
import './styles.global.scss';
import css from './styles.scss';

// ----------------------

@connect(state => ({ colour: state.colour }))
export default class Container extends React.PureComponent {
  static propTypes = {
    colour: PropTypes.string,
  }

  static defaultProps = {
    colour: 'goldenrod',
  }

  changeColour = () => {
    this.props.dispatch(changeColour());
  }

  render() {
    const h1Style = {
      backgroundColor: this.props.colour,
    };

    return (
      <div className={css.container}>
        <Helmet
          title="Oktopus"
          meta={[{
            name: 'description',
            content: 'Oktopus front-end',
          }]} />
        <div className={css.logo}>
          <img src={oktopusLogo} alt="Oktopus" />
          <h1 style={h1Style}>Coming soon</h1>
          <button onClick={this.changeColour}>Change colour</button>
        </div>
      </div>
    );
  }
}
