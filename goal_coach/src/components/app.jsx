import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './add_goal';
import GoalList from './goal_list';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){
    return(
      <div style={{margin: '5px'}}>
        <div>
          <h3> Goal Coach </h3>
          <AddGoal />
          <hr />
          <h4> Goals </h4>
          <GoalList />
          <hr />
        </div>
        <button
          className='btn btn-danger'
          onClick={() => this.signOut()}
        >
          Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('APP.jsx state', state);
  return {};
}

export default connect(mapStateToProps, null)(App);