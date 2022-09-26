import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/post-service/post.service";
import css from './Post.module.css'
import PostDetails from "./PostDetails";
export default function Post() {
    let location = useLocation();
    let {state:postId} = location;

    let [post,setPost] = useState();

    useEffect(() =>{
        postService.getPostById(postId).then(value => setPost(value.data))
    },[postId])


    return(
        <div className={css.Post}>
            {post && (<PostDetails post={post} id={postId}/>)}
        </div>
    )

}