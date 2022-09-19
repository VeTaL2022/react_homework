import {useEffect, useState} from "react";

import {getPostsAxios, getUsersAxios} from "../../services/user.api.axios";
import User from "./User";
import UserChild from "./UserChild";

export default function Users() {

    let id = 1;

    let [users,setUsers] = useState([]);
    let [posts,setPosts] = useState([]);

    let lift = (array) =>{
        setPosts(array);
    }

    useEffect(() =>{
        getUsersAxios().then(value => setUsers(value.data));
        getPostsAxios(id).then(value => setPosts(value.data));
    },[id])

    // useEffect(() =>{
    //     getPostsAxios().then(value => setPosts(value.data));
    // },[])


    return (
        <div>
            {<UserChild item={posts}/>}
            {users.map((user,index) => (<User item={user} key={index} lift={lift}/>))}
            {JSON.stringify(posts)}
        </div>);
}