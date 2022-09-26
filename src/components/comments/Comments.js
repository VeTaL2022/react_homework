import {useEffect, useState} from "react";

import {commentService} from "../../services/comment-service/comment.service";
import Comment from "./Comment";

export default function Comments() {

    let [comments,setComments] = useState([]);

    useEffect(() =>{
        commentService.getComment().then(value => setComments(value.data));
    },[])

    return(
        <div>
            {comments.map((comment,index) =>(<Comment item={comment} key={index}/>))}
        </div>
    )

}