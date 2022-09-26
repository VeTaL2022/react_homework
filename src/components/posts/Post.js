import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/post-service/post.service";

export default function Post() {
    let location = useLocation();
    let {state:postId} = location;

    let [post,setPost] = useState();

    useEffect(() =>{
        postService.getPostById(postId).then(value => setPost(value.data))
    },[postId])


    return(
        <div>
            <h2>{postId}</h2>
            <h4>
                {JSON.stringify(post)}
            </h4>
        </div>
    )

}