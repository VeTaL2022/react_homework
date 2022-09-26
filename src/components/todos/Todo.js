import {useNavigate} from "react-router-dom";

import css from './Todo.module.css'

export default function Todo({item:todo}) {
    let navigate = useNavigate();
    return(
        <div className={css.Todo}>
            <p>id: {todo.id} <button onClick={() => navigate(todo.id.toString(), {state:{...todo}})}>More Details</button></p>
        </div>
    )

}