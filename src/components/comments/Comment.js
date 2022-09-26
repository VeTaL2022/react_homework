import {Link} from "react-router-dom";

export default function Comment({item:comment}) {
    
    return(
        <div>
            <hr/>
            <p>userId: {comment.postId}</p>
            <p>id: {comment.id}</p>
            <Link to={`/posts/${comment.postId}`} state={comment.postId}><p>name: {comment.name}</p></Link>
            <p>email: {comment.email}</p>
            <p>body: {comment.body}</p>
            <hr/>
        </div>
    )

}