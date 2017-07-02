// Account menu

// ----------------------
// IMPORTS

/* NPM */
import Immutable from 'seamless-immutable';

// ----------------------

// Initial state
const initialState = Immutable({
  activated: false,
});

export default {
  accountMenu: {
    state: initialState,
    reducer(state = initialState, action) {
      if (action.type === 'TOGGLE_ACCOUNT_MENU') {
        return state.merge({
          activated: !state.activated,
        });
      }
      return state;
    },
  },
};
