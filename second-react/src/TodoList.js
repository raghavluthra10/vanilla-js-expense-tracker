import React from 'react';
import Todo from './Todo';

export default function TodoList({ tasks }) {


    return(

        tasks.map(each => {
            return <Todo key={each.id} todo = {each} />

        })

    )
}