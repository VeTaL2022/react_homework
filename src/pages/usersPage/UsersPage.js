import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {loadUsers} from "../../redux-reducer";
import {User} from "../../components";
import css from './UsersPage.module.css';

export function UsersPage() {

    const userState = useSelector(state => state.userReducer);
    const userDispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => {
                userDispatch(loadUsers(value));
            });

    }, []);

    return(
        <div className={css.UsersPage}>
            <p><h3>All Users</h3>{userState.users.map((user, index) => (<User item={user} key={index}/>))}</p>
        </div>
    )

}