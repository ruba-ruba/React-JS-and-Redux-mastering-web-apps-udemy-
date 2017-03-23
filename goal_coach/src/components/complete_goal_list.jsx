import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';
import { setCompletedGoals } from '../actions';
import { connect } from 'react-redux';


class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({email, title});
      })
      this.props.setCompletedGoals(completeGoals);
    })
  }

  clearCompleted(){
    completeGoalRef.set([]);
  }

  render(){
    return(
      <div>
        {
          this.props.completeGoals.map((completeGoal, index) => {
            const { title, email } = completeGoal;
            return(
              <div key={index}>
                <strong>{title}</strong>
                <span> completed by {email}</span> 
              </div>  
            )
          })
        }
        <button
          className='btn btn-primary'
          onClick={() => this.clearCompleted()}
        >
          Clear All
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { completeGoals } = state;
  return {
    completeGoals
  }
}

export default connect(mapStateToProps, { setCompletedGoals })(CompleteGoalList);