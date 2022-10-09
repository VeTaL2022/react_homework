import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postActions} from "../../../redux";
import {Post} from "../Post/Post";

export function Posts() {

    const postDispatch = useDispatch();
    const {posts, loading, error} = useSelector(state => state.postReducer);

    useEffect(() => {
        postDispatch(postActions.getAllPosts());
    }, []);

    return (
        <div style={{width:'20%'}}>
            {loading && <h2>Loading........................</h2>}
            {error && <h2>Error</h2>}
            {posts.map((post, index) => <Post key={index} post={post}/>)}
        </div>
    )

}