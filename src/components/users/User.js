export default function User({item:user,lift}) {
    return (
        <div className={'User'}>
            <h2>{user.id} - {user.name}</h2>
            <button onClick={() => {lift(user.id)}}>Get Posts</button>
        </div>);
}