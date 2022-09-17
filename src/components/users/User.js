export default function User({item:user,lift}) {

    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <button onClick={() => {lift(lift)}}>click to see posts</button>
        </div>);
}
