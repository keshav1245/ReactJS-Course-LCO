import React, {useContext} from "react";
import {ListGroup, ListGroupItem} from "reactstrap"
import TodoContext from "../context/ToDoContext"
import {FaCheckDouble} from 'react-icons/fa'
import  {REMOVE_TODO} from '../context/action.types'

const Todos = () =>{

    const  {todos, dispatch} = useContext(TodoContext);
    
    return (

        <ListGroup className="mt-5 mb-2 items">

            {todos.map((t) => {
                return (


                    <ListGroupItem className="w-100" key={t.id}>

                        {t.title}
                        <span className="float-right"
                            onClick={() => { dispatch({type: REMOVE_TODO, payload: t.id}) }}
                        >
                            <FaCheckDouble/>
                        </span>

                    </ListGroupItem>


                )
            })}

        </ListGroup>

    )
    


}

export default Todos