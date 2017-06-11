// ----------------------
// IMPORTS

/* NPM */
import Immutable from 'seamless-immutable';

// ----------------------

// Colours to cycle through
const colours = [
  'goldenrod',
  'hotpink',
  'green',
];

// Set the initial state, make it immutable
const initialState = Immutable(colours[0]);

export default {
  colour: {
    state: initialState,
    reducer(state = initialState, action) {
      if (action.type === 'CHANGE_COLOUR') {
        return Immutable(
          action.colour || colours[(colours.indexOf(state) + 1) % colours.length],
        );
      }
      return state;
    },
  },
};
