export default function User(props) {
    let {item: user, lift} = props;

    return (
        <div className='userChild'>
            <h2>{user.id} - {user.name}</h2>
            <button onClick={() => {lift(user)}}>click for more details</button>
        </div>);
}