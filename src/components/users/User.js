import css from './User.module.css';
export function User({item:user}) {

    return(
        <div className={css.User}>
            <p>{JSON.stringify(user)}</p>
        </div>
    )

}