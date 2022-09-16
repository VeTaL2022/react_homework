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
            <div>
                <h3>Some info about _user <ins>{user?.name}</ins>:</h3>
                <p>
                    Username: {user?.username} <br/>
                    Email: {user?.email} <br/>
                    Adress-Street: {user?.address.street} <br/>
                    Adress-City: {user?.address.city} <br/>
                    Phone: {user?.phone} <br/>
                    Website: {user?.website} <br/>
                    Company-Name: {user?.company.name}
                </p>
            </div>


            {users.map((user,index) => (<User item={user} key={index} lift={lift}/>))}
        </div>
    )
}
