import { SET_COMPLETED_GOALS } from "../constants";

export default (state = [], action) => {
  switch(action.type) {
    case SET_COMPLETED_GOALS:
      const { completeGoals } = action;
      return completeGoals;      
    default:
      return state;
  }
}