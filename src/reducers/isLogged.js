import { ACTIONS } from '../actions/ACTIONS';

export const isLogged = (state = false, action) => {
  switch (action.type) {
    case ACTIONS.SIGN_IN:
      return !state;
    default:
      return state;
  }
};
