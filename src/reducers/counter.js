import { ACTIONS } from "../actions/ACTIONS"

export const counter = (state = 0, action) => {
  switch(action.type) {
    case ACTIONS.ADD:
      return state + action.payload;
    case ACTIONS.SUBSTRACT:
      return state - action.payload;
    default:
      return state;
  }
}