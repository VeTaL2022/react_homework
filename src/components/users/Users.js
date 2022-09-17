import {useEffect, useState} from "react";
import {getPostsAxios, getUsersAxios} from "../../services/user.api.axios";
import User from "./User";

export default function Users() {

    let [users,setUsers] = useState([]);
    let [posts,setPosts] = useState([]);

    let lift = (obj) =>{
        setPosts(obj);
    }


    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data));
    },[])

    // useEffect(() =>{
    //     getPostsAxios().then(value => setPosts(value.data));
    // })


    return (
        <div>
            <h2>{JSON.stringify(posts)}</h2>
            {users.map((user,index) => (<User item={user} key={index} lift={lift}/>))}
        </div>);
}
