import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentService} from "../../services";

export function CommentsDetailsPage() {

    let {state} = useLocation();
    let [comment,setComment] = useState(state);
    let {id} = useParams();

    useEffect(() => {
        if(!state){
            commentService.getById(id).then(({data}) => setComment(data))
        } else {
            setComment(state)
        }
    },[id,state])

    return(
        <div>
            {comment && <div>{JSON.stringify(comment)}</div>}
        </div>
    )

}