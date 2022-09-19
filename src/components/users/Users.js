import {useEffect, useState} from "react";
import {getUsersAxios} from "../../services/user.api.axios";
import User from "./User";

export default function Users() {
    let [users,setUsers] = useState([]);
    let [user,setUser] = useState(null);

    const lift = (obj) =>{
        setUser(obj);
    }
    useEffect(() =>{
        getUsersAxios().then(value => setUsers(value.data));
    },[]);

    return (
        <div>
            {users.map((user, index) => (<User item={user} key={index} lift={lift}/>))}
            <p>{JSON.stringify(user)}- <button onClick={() => {lift(user.name)}}>get posts</button></p>
        </div>);
}
