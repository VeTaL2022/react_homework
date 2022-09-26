import {useEffect, useState} from "react";

import Todo from "./Todo";
import {todoService} from "../../services/todo-service/todo.service";

export default function Todos() {

    let [todos,setTodos] = useState([]);

    useEffect(() =>{
        todoService.getTodo().then(value => setTodos(value.data));
    },[]);

    return(
        <div>
            {todos.map((todo,index) => (<Todo item={todo} key={index}/>))}
        </div>

    )

}