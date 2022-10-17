import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {IPost} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {postActions} from "../../redux";

export const PostForm: FC = () => {
    const {handleSubmit, register, reset} = useForm<IPost>();
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<IPost> = async (data) => {
        await dispatch(postActions.createPost({post: data}))
        reset();
    };
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'title'} {...register('title')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Save</button>
        </form>
    )

}