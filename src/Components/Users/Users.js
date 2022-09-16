import {useEffect, useState} from "react";

import User from "./User";
import {getUsersAxios} from "../../Services/user.api";

export default function Users() {
    let [users,setUsers] = useState([]);
    let [user,setUser] = useState(null);

    let lift = (obj) => {
        setUser(obj)
    }

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data));
    },[])


    return (
        <div>
            <div className='user'>
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
            </div>


            {users.map((user,index) => (<User item={user} key={index} lift={lift}/>))}
        </div>
    )
}
