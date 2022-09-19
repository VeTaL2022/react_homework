export default function User({item:user,lift}) {

    return (
        <div>
            <h3>{user.id} - {user.name}</h3>
            <button onClick={() => {lift(user)}}>click for more information</button>
        </div>);
}
