import {useForm} from "react-hook-form";

import css from './CommentForm.module.css'
import {commentService} from "../../services/comment-api/comment.service";

export default function CommentForm({setComments}) {
    const {register, reset, handleSubmit, formState:{isValid}} = useForm({
        mode: 'all'
    });

    // const submit = async (comment) =>{
    //     const {data} = await  commentService.createPost(comment);
    //     setComments(comments => [...comments, data]);
    //     reset();
    // }

    const submit = (obj) =>{
        commentService.createComment(obj).then(({data}) => setComments(users => [...users, data]))
        reset();
    }

    return(
        <div className={css.CommentForm}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name', {required:true, minLength:{value:2 , message:'min 2 ch'}})}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'body'} {...register('body', {required:true, minLength:{value:10 , message:'min 10 ch'}})}/>
                <button disabled={!isValid}>Add new Comment</button>
            </form>
        </div>
    )

}