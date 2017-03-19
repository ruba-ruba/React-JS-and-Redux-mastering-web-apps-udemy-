import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';
import { deleteRreminder } from '../actions';
import { clearReminders } from '../actions';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    };
  }

  addReminder(){
    console.log('this.state.dueDate', this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteRreminder(id){
    this.props.deleteRreminder(id);
  }

  clearReminders(){
    this.props.clearReminders();
  }

  renderReminders(){
    const { reminders } = this.props;
    return(
      <ul className='list-group col-sm-4'>
        {
          reminders.map(reminder => {
            return(
              <li key={reminder.id} className='list-group-item'>
                <div className='list-item'>
                  <div>{ reminder.text }</div>
                  <div><em>{ moment(new Date(reminder.dueDate)).fromNow() }</em></div>
                </div>
                <div
                  className='list-item delete-button'
                  onClick={() => {this.deleteRreminder(reminder.id)}}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render(){
    return(
      <div className='app'>
        <div className='title'> Reminder Pro</div>
        <div className='form-inline'>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='I have to ...'
              onChange={event => this.setState({text: event.target.value})}
            />
            <input
              className='form-control'
              type='datetime-local'
              onChange={event => this.setState({dueDate: event.target.value})}
            />
            <button
              type='button' 
              className='btn btn-success'
              onClick={() => this.addReminder()}
            >Add reminder</button>
          </div>
          { this.renderReminders() }
          <div
            className='btn btn-danger'
            onClick={() => this.clearReminders()}
          >
            Clear Reminders
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteRreminder, clearReminders })(App);
