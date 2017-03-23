import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAaWUDFiE8aow7N3ILqJj89pgwUUbb_vpo",
  authDomain: "goal-coach-56de1.firebaseapp.com",
  databaseURL: "https://goal-coach-56de1.firebaseio.com",
  storageBucket: "goal-coach-56de1.appspot.com",
  messagingSenderId: "549724708453"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');