import css from './Comment.module.css';

export function Comment({item:comment}) {

    return(
        <div className={css.Comment}>
            {JSON.stringify(comment)}
        </div>
    )

}