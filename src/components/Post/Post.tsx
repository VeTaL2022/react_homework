import {FC, ReactNode} from "react";

import {IPost} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    post: IPost,
    children?: ReactNode
}

export const Post: FC<IProps> = ({post}) => {
    const {id, userId, title, body} = post;
    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() =>navigate(`${id}`, {state: post})}>Click</button>
            <hr/>
        </div>
    )

};