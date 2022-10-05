import css from './Post.module.css';

export function Post({item:post}) {

    return(
        <div className={css.Post}>
            {JSON.stringify(post)}
        </div>
    )

}