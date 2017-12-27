// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {

  constructor(props) {

    super(props);

    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    this.props.dispatch({
      type: 'LOGGED_IN',
      data: true
    });
  }

  render() {

    return (<div>
              <div className='header TableObject'>
                <div className='TableObject-item'>
                  <h3>TLV GraphQL API</h3>
                </div>
                <div className='TableObject-item text-right'>
                  <span>{this.props.text}</span>
                  <a onClick={this.logIn}
                      className='btn btn-sm btn-primary ml-2' target='_blank' href=''>
                    Log In
                  </a>
                </div>
              </div>
              <div className='Box-row Box-row-yellow'>
                <strong>Heads up!</strong>&nbsp;
                TLV GraphQL Explorer makes use of
                <strong>real, live, production data</strong>
              </div>
            </div>
      );
  }

};

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default connect()(Header);
