import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
//import { render } from '@testing-library/react';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/about';
import {v4 as uuid} from 'uuid';


class App extends Component{
  state = {
    todos:[]    
  }

  // toggle complete
  markCompleted = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      } 
      return todo;
    } ) })
  } 

// delete todo task
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

// add Todo task
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }


  render() {

    return(
      <Router>
        <div className="App">
        <div className='container'>
        
        <Header/>
        <Route exact path='/' render={props =>  (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} 
            markCompleted={this.markCompleted}
            delTodo={this.delTodo}/>
            
          </React.Fragment>
        )} />
        <Route path='/about' component={About}/>

        
        </div>
        </div>
      </Router>

    )
  }

}

// add: if empty dont do anything and give validation, else print the task on the DOM



export default App;
