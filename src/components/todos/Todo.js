import {Link} from "react-router-dom";

export default function Todo({item:todo}) {
    
    return(
        <div>
            <p>{todo.userId} - {todo.id} <button><Link to={'/todos/'+todo.id} state={{...todo}}>More Details</Link></button></p>
        </div>
    )

}