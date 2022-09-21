import {useEffect, useState} from "react";

import {commentService} from "../../services/comment-api/comment.service";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

export default function Comments() {

    let [comments,setComments] = useState([]);

    useEffect(() =>{
        commentService.getAll().then(value => setComments(value.data));
    },[]);


    return(
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            {comments.map((comment,index) => (<Comment comment={comment} key={index} setComments={setComments}/>))}
        </div>
    )

}