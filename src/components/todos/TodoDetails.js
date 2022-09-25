import {useLocation} from "react-router-dom";

export default function TodoDetails() {
    let location = useLocation();
    let {state: todo} = location;
    return(
        <div>
            <p>userId: {todo.userId}</p>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <p>completed: {todo.completed.toString()}</p>
        </div>
    )

}