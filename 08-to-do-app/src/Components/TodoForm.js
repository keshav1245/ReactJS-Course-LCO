import React, { useState, useContext } from 'react';
import {
    InputGroup,
    Input,
    Button,
    Form
} from 'reactstrap';

import { v4 } from 'uuid';
import TodoContext from '../context/ToDoContext';
import { ADD_TODO } from '../context/action.types'

const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(todoString === ""){
            return alert('Please enter a ToDo Task');
        }

        const todo = {
            id : v4(),
            title : todoString
        }

        dispatch({
            type : ADD_TODO,
            payload : todo
        })

        setTodoString('')
        

    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Input type='text' name='todo' id='todo' placeholder='Your Next Todo'
                value = {todoString}
                onChange= {e => setTodoString(e.target.value)}
                />
                <Button color='warning'
                //TODO: onClick
                >Add</Button>
            </InputGroup>
        </Form>
    )


}


export default TodoForm