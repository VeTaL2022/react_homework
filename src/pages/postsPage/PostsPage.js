import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {loadPosts} from "../../redux-reducer";
import {Post} from "../../components";
import css from './PostsPage.module.css';

export function PostsPage() {

    const postState = useSelector(state => state.postReducer);
    const postDispatch = useDispatch();


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => {
                postDispatch(loadPosts(value));
            });
    }, []);

    return(
        <div className={css.PostsPage}>
            <p><h3>All Posts</h3>{postState.posts.map((post, index) => (<Post item={post} key={index}/>))}</p>
        </div>
    )

}