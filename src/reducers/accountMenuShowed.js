const initialState = false;

export default {
  accountMenuShowed: {
    state: initialState,
    reducer(state = initialState, action) {
      if (action.type === 'SHOW_ACCOUNT_MENU') {
        return action.accountMenuShowed;
      }
      return state;
    },
  },
};
