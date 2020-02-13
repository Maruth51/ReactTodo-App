
import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {date : new Date().toLocaleTimeString(),
                  istask :false
                 }
  }
  componentDidMount(){
    
  }
  tickle = () => {
    this.setState({
      date : new Date().toLocaleTimeString()
    })
  }
  handleSubmit =(e)=>{
    let taskList = ['homework','develop','angular','react']
    this.setState({istask :true})
    this.taskDisp = taskList.map((ele) => <li> {ele} </li>)
    
  }
  render(){
    return (
      <div>
        <h2>It is {this.state.date}.</h2>
      <input name = 'task' Placeholder = 'Enter task'></input>
      <button type = 'submit' onClick = {this.handleSubmit}>  Add task </button>
      <ul>
        {this.state.istask? this.taskDisp : "No task"}
      </ul>
      </div>
    )
  }
}

export default Todo;
  