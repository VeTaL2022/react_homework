import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {loadComments, loadPosts, loadUsers} from "../../App";
import {User} from "../users/User";
import {Post} from "../posts/Post";
import {Comment} from "../comments/Comment";

export function MainComponent() {

    const userState = useSelector(state => state.userReducer);
    const userDispatch = useDispatch();

    const postState = useSelector(state => state.postReducer);
    const postDispatch = useDispatch();

    const commentState = useSelector(state => state.commentReducer);
    const commentDispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => {
                userDispatch(loadUsers(value));
            });

    },[]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => {
                postDispatch(loadPosts(value));
            });
    },[]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(value => {
                commentDispatch(loadComments(value));
            });
    },[]);

    return (
        <div style={{display:'flex'}}>
            <p>{userState.users.map((user, index) => (<User item={user} key={index}/>))}</p>
            <hr/>
            <p>{postState.posts.map((post, index) => (<Post item={post} key={index}/>))}</p>
            <hr/>
            <p>{commentState.comments.map((comment, index) => (<Comment item={comment} key={index}/>))}</p>
        </div>
    )

}