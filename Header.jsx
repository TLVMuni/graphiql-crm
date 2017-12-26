import React from 'react';

import styles from '../css/header.css'

class Header extends React.Component {

  constructor(props) {

    super(props);
  }

  logIn() {
    console.log('Login');
    //this.jwt = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzMTMwNjk0ODYiLCJuYmYiOjE1MTQyMTc3MDAsImV4cCI6MTUxNDMwNDEwMCwiaWF0IjoxNTE0MjE3NzAwLCJpc3MiOiJ1cm46dGVsLWF2aXY6YXBpIiwiYXVkIjoiZGlnaXRlbCJ9.QfmAOqDDiwgAfhan3LtFPU0jq8iG921IDfA9w3lfUPQ'
  }

  render() {

    return (<div>
              <div className='header TableObject'>
                <div className='TableObject-item'>
                  <h3>TLV GraphQL API</h3>
                </div>
                <div className='TableObject-item text-right'>
                  <span>Start exploring GraphQL API queries using your Digitel account now</span>
                  <a className='btn btn-sm btn-primary ml-2' target='_blank' href='/login'>
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

export default Header;
