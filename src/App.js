import React, { Component } from 'react';
import TodoList from "./todoDisplay.js"
import AddTodo from "./addTodo.js"

export default class App extends Component{
    constructor(props){
      super(props)
      this.state = {
      'todos':[
         {'name':'Walk the dog', 'id': 0},
         {'name':'Bake a cake', 'id': 1},
        {'name':'Study for the test', 'id': 2}
        ]
      }
    }
  addTodo = (todo) => {
    let newTodo = {id : this.state.todos.length ,name : todo}
    let todos = this.state.todos
    todos.push(newTodo)
    this.setState( { todos } )
  }
  deleteTodo = (id) => {
      let todos = this.state.todos
      const index = todos.findIndex((elem,ind)=>{
           if (id === elem.id){
               return true}
        else{
          return false
        }
         }
                                   )
    todos.splice(index,1)
    this.setState({todos})
  }
  
  render(){
    
    return(
    <div>
      <h1>Hello World</h1>
      <AddTodo addTodo = {this.addTodo}/>
      <TodoList todo = {this.state.todos}  deleteTodo = {this.deleteTodo}/>
    </div>
    )
  }
}