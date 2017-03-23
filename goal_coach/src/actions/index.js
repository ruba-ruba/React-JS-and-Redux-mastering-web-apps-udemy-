import { SIGNED_IN, SET_GOALS, SET_COMPLETED_GOALS } from "../constants";

export function logUser(email){
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

export function setGoals(goals) {
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}

export function setCompletedGoals(completeGoals) {
  const action = {
    type: SET_COMPLETED_GOALS,
    completeGoals
  }
  return action;
}