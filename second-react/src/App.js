import React, { useRef, useState } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4'

function App() {
  
  const [todos, setTodos] = useState([ ])

   const todoNameRef = useRef();

   function addTodo() {
    const val = todoNameRef.current.value
    
    if (val === '') return
    console.log(val)

    setTodos(kaamKar => {
      return [...kaamKar, {id: uuidv4(), kaam: val, complete: false}]
    })

    todoNameRef.current.value = '';
   }


  return (
    <>

    <TodoList tasks={todos} />

    <input ref={todoNameRef} type='text'/>

    <button onClick={addTodo}> ADD </button>
    <button> CLEAR </button>
    <div> 0 Tasks left.</div>

    </>
  );
}

export default App;
