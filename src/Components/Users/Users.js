import {useEffect, useState} from "react";

import User from "./User";
import {getUsersAxios} from "../../Services/user.api";
import UserChild from "./UserChild";

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
            {<UserChild item={user}/>}
            {users.map((user,index) => (<User item={user} key={index} lift={lift}/>))}
        </div>
    )
}
