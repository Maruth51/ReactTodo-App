import React, { Component } from 'react';

export default class AddTodo extends Component{
 
  handleSubmit = (e)=>{
    console.log(e.target.item.value)
    e.preventDefault()
    this.props.addTodo(e.target.item.value)
    document.querySelector('form').reset()
  }
  render(){
    
    return (
    <div>
        <form onSubmit = {this.handleSubmit}>
          <input type='text' placeholder = 'Add todo' id ='item'></input>
          <button type ='submit' className="btn btn-add"> ADD </button>
        </form>
      
      
      </div>)
  }
}