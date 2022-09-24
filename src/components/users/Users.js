import {useEffect, useState} from "react";

import css from './Users.module.css'
import UserDetails from "./UserDetails";
import User from "./User";
import Post from "./Post";
import {getPostsAxios, getUsersAxios} from "../../services/user.api.axios";

export default function Users() {
    let [users,setUsers] = useState([]);
    let [user,setUser] = useState();

    let [id,setId] = useState();
    let [posts,setPosts] = useState([]);


    const lift = (obj) =>{
        setUser(obj);
    }
    const liftPost = (id) =>{
        setId(id);
    }

    useEffect(() =>{
        getPostsAxios(id).then(value => setPosts(value.data));
    },[id])

    useEffect(() =>{
        getUsersAxios().then(value => setUsers(value.data));
    },[]);

    return (
        <div>
            <div className={css.Users}>{users.map((user, index) => (<User item={user} key={index} lift={lift}/>))}
                {user && (<UserDetails user={user} id={id} liftPost={liftPost}/>)}</div>
            <div>{posts.map((post, index) => (<Post item={post} key={index}/>))}</div>
        </div>);
}
