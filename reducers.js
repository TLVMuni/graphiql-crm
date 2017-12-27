import _ from 'lodash';

const INITIAL_STATE = {
  loggedIn: false,
  jwt: {}
};

const reducers = (state = INITIAL_STATE, action) => {

  switch( action.type ) {

    case 'LOGGED_IN':
      state = _.assign({}, state, {
                                    loggedIn: action.data.status,
                                    authHeader: action.data.authHeader
                                  });
      break;

    default:
      break;

  }

  return state;

};

export default reducers;
