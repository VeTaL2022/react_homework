import {Link} from "react-router-dom";

export default function Comment({item:comment}) {
    
    return(
        <div>
            <hr/>
            {/*{JSON.stringify(comment)}*/}
            <p>userId: {comment.postId}</p>
            <p>id: {comment.id}</p>
            <Link to={'/comments/'+comment.postId+'/posts'}><p>name: {comment.name}</p></Link>
            {/*<p>name: {comment.name}</p>*/}
            <p>email: {comment.email}</p>
            <p>body: {comment.body}</p>
            <hr/>
        </div>
    )

}