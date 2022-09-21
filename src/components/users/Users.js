import {useEffect, useState} from "react";

import {getPostsAxios, getUsersAxios} from "../../services/user.api.axios";
import User from "./User";
import Post from "./Post";

export default function Users() {

    let [users,setUsers] = useState([]);
    let [posts,setPosts] = useState([]);

    let lift = (id) =>{
        getPostsAxios(id).then(value => setPosts(value.data));
    }

    useEffect(() =>{
        getUsersAxios().then(value => setUsers(value.data));
    },[])

    return (
        <div>
            {users.map((user,index) => (<User item={user} key={index} lift={lift}/>))}
            {posts.map(post => (<Post item={post}/>))}
        </div>);
}