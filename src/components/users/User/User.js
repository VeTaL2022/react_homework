import {useDispatch} from "react-redux";

import {userActions} from "../../../redux";
import css from './User.module.css';

export function User({user}) {
    const {id,name,username,email,website} = user;

    const dispatch = useDispatch();

    return(
        <div className={css.User}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>website: {website}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>Select</button>
            <button onClick={() => dispatch(userActions.deleteUserById(id))}>Delete</button>
        </div>
    )

}