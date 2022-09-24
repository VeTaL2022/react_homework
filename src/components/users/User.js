import css from './User.module.css'
export default function User({item:user,lift}) {
    return (
        <div className={css.User}>
            <h4>{user.id} - {user.name}</h4>
            <button onClick={() => {lift(user)}}>All Info</button>
        </div>);
}
