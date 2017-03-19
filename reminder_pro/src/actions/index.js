import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  }
  console.log('action in addReminder', action);
  return action;
}

export const deleteRreminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log("deleting reminder", action);
  return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}

