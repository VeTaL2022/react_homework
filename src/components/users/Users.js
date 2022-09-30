import {useEffect, useState} from "react";
import {userService} from "../../services";
import {User} from "./User";

export function Users() {

    let [users,setUsers] = useState([]);

    useEffect(() =>{
        userService.getUser().then(({data}) => setUsers(data))
    },[]);

    return(
        <div>
            {users.map((user,index) => (<User item={user} key={index}/>))}
        </div>
    )

}