import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {IPost} from "../interfaces";
import {useAppLocations} from "../hooks";
import {postService} from "../services";

export const PostDetailsPage: FC = () => {
    const {id} = useParams<{ id: string }>();
    const {state} = useAppLocations<IPost>();

    const [post, setPost] = useState<IPost | null>(null);

    useEffect(() => {
        if (state) {
            setPost(state)
        } else postService.getById(+id!).then(({data}) => setPost(data));
    }, [id,state]);

    return (
        <div>
            {post &&
                <div>
                    <div>id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>}
        </div>
    )
}