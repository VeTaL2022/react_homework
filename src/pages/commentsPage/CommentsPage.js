import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {loadComments} from "../../redux-reducer";
import {Comment} from "../../components";
import css from './CommentsPage.module.css';

export function CommentsPage() {

    const commentState = useSelector(state => state.commentReducer);
    const commentDispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(value => {
                commentDispatch(loadComments(value));
            });
    }, []);

    return (
        <div className={css.CommentsPage}>
            <p><h3>All Comments</h3>{commentState.comments.map((comment, index) => (<Comment item={comment} key={index}/>))}
            </p>
        </div>
    )

}