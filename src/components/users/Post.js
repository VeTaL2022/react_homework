import css from './Post.module.css'
export default function Post({item:post}) {

    return(
        <p className={css.Post}>
            {JSON.stringify(post)}
        </p>
    )

}