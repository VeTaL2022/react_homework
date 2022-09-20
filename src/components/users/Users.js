import {useEffect, useState} from "react";

import {getPostsAxios, getUsersAxios} from "../../services/user.api.axios";
import User from "./User";

export default function Users() {

    let id=1;

    let [users,setUsers] = useState([]);
    let [posts,setPosts] = useState([]);

    let lift = (id) =>{
        setPosts(id.id);
    }

    useEffect(() =>{
        getUsersAxios().then(value => setUsers(value.data));
    },[])

    useEffect(() =>{
        getPostsAxios(id).then(value => setPosts(value.data));
    },[id])


    return (
        <div>
            {JSON.stringify(posts)}
            {users.map((user,index) => (<User item={user} key={index} lift={lift}/>))}
        </div>);
}