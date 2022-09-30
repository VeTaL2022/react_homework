import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "./Post";

export function Posts() {

    let [posts,setPosts] = useState([]);

    useEffect(() => {
        postService.getPost().then(({data}) => setPosts(data))
    },[]);

    return(
        <div>
            {posts.map((post, index) => (<Post item={post} key={index}/>))}
        </div>
    )

}