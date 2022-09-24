import css from './UserDetails.module.css'
export default function UserDetails({user,liftPost}) {
    
    return(
        <div className={css.UserDetails}>
            <p>{JSON.stringify(user)}</p>
            <button onClick={() => liftPost(user.id)}>See posts</button>
        </div>
    )

}