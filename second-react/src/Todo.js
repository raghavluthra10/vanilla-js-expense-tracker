import React from 'react';
import TodoList from './TodoList';

export default function Todo( {todo}) {

    return (
        <div>
            <input type='checkbox' checked={todo.complete}/>
            {todo.kaam}
        </div>
    )
}