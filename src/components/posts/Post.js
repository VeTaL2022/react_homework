import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "../../index";

export function Post({item:post}) {
    let {id,title} = post
    let context = useContext(MyContext);
    let navigate = useNavigate();

    return(
        <div>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <button onClick={() => navigate(`${id}`, {state:{...post}})}>Details</button>
            <button onClick={() => context.post=post}>Save</button>
            <hr/>
        </div>
    )

}