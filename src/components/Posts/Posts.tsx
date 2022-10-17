import {useEffect} from "react";

import {Post} from "../Post/Post";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {postActions} from "../../redux";


export const Posts = () => {
    const {posts} = useAppSelector(state => state.postReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [dispatch]);

    return (
        <div>
            {posts.map((post, index) => <Post post={post} key={index}/>)}
        </div>
    )

}