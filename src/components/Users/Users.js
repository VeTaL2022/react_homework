import {useEffect, useState} from "react";
import {getUsersAxios} from "../../services/users.api.axios";
import User from "./User";
import UserForm from "./UserForm";

export default function Users() {

    let [users,setUsers] = useState([]);

    useEffect(() =>{
        getUsersAxios().then(value => setUsers(value.data));
    },[]);

    return(
        <div>
            <UserForm setUsers={setUsers}/>
            {users.map((user,index) => (<User item={user} key={index} setUsers={setUsers}/>))}
        </div>
    );

}