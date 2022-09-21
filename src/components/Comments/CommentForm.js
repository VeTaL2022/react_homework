import {useForm} from "react-hook-form";
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
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'id'} {...register('id')}/>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button disabled={!isValid}>Save</button>
            </form>
        </div>
    )

}