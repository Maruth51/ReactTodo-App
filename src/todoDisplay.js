import React, { Component } from 'react';
export default class TodoList extends Component{
  
  render(){
    
    return(
      <div className = "list-container">
      <ul className = "list">{this.props.todo.map((ele) => {
          return <li key={ele.id}>
            <div>
              {`${ele.id +1 } ${ele.name}`} <button className= "btn-delete" onClick ={()=>{this.props.deleteTodo(ele.id)}}> x </button>
            </div> 
          </li>
        })}</ul>
      
      </div>
    )
  }
}