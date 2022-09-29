import {useEffect, useState} from "react";
import {commentService} from "../../services";
import {Comment} from "./Comment";

export function Comments() {

    let [comments,setComments] = useState([]);

    useEffect(() => {
        commentService.getComment().then(({data}) => setComments(data))
    })

    return(
        <div>
            {comments.map((comment,index) => (<Comment item={comment} key={index}/>))}
        </div>
    )

}