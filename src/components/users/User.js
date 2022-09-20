export default function User({item:user,lift,posts}) {
    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <button onClick={() => {lift(user)}}>Get Posts</button>
        </div>);
}