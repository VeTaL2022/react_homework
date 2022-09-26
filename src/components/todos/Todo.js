import {useNavigate} from "react-router-dom";

export default function Todo({item:todo}) {
    let navigate = useNavigate();
    return(
        <div>
            <p>id: {todo.id} <button onClick={() => navigate(todo.id.toString(), {state:{...todo}})}>More Details</button></p>
        </div>
    )

}