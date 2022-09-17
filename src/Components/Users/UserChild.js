export default function UserChild({item:user}) {

    return (<div className='user'>
        <h3>Some info about _user <ins>{user?.name}</ins>:</h3>
            <p>
                <b>Username</b>: {user?.username} <br/>
                <b>Email</b>: {user?.email} <br/>
                <b>Adress-Street</b>: {user?.address.street} <br/>
                <b>Adress-City</b>: {user?.address.city} <br/>
                <b>Phone</b>: {user?.phone} <br/>
                <b>Website</b>: {user?.website} <br/>
                <b>Company-Name</b>: {user?.company.name}
            </p>
    </div>);
}
