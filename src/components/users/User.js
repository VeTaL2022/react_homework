import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

export function User({user}) {

    const dispatch = useDispatch();
    const {id} = user;
    return(
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>Select</button>
            <button onClick={() => dispatch(userActions.getUserById({id}))}>getFromApi</button>
            <button onClick={() => dispatch(userActions.deleteUserById(id))}>Delete</button>
            <hr/>
        </div>
    )

}