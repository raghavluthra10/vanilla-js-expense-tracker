import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component{

getStyle = () => {

    return {
        backgound: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px, #ccc dotted',
        textDecoration: this.props.todo.completed ? 
        'line-through' : 'none'
    }

}


render() {

    const { id, title } = this.props.todo;

    return(
        <div style={ this.getStyle() }>
        <h1>
            <input type='checkbox' onChange={this.props.markCompleted.bind(this, id)} /> {'  '}
            { title }
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}> X </button>
        </h1>
        </div>
    );
}
}

// prop-types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backgound: '#800000',
    border: 'none',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}

export default TodoItem;