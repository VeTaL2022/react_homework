import {useEffect, useState} from "react";

import User from "./User";
import UserForm from "./UserForm";
import {userService} from "../../services/user.service";

export default function Users() {

    let [users,setUsers] = useState([]);

    useEffect(() =>{
        userService.getAll().then(value => setUsers(value.data));
    },[]);

    return(
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            {users.map((user,index) => (<User user={user} key={index} setUsers={setUsers}/>))}
        </div>
    );

}