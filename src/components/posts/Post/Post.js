import {useDispatch} from "react-redux";

import {postActions} from "../../../redux";
import css from './Post.module.css';

export function Post({post}) {
    const {userId,id,title} = post;

    const dispatch = useDispatch();

    return(
        <div className={css.Post}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => dispatch(postActions.setCurrentPost(post))}>Select</button>
            <button onClick={() =>dispatch(postActions.deletePostById(id))}>Delete</button>
        </div>
    )

}