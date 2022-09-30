import {useNavigate} from "react-router-dom";

export function Comment({item:comment}) {

    let {id,name} = comment;
    let navigate = useNavigate();
    return(
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <button onClick={() => navigate(`${id}`, {state:{...comment}})}>Details</button>
            <hr/>
        </div>
    )

}