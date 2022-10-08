import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "./User";

export function Users() {
    const userDispatch = useDispatch();
    const {users} = useSelector(state => state.userReducer);

    useEffect(() => {
        userService.getUser().then(({data}) => userDispatch(userActions.getUser(data)))
    },[])
    return(
        <div>
            {users.map((user, index) => <User key={index} user={user}/>)}
        </div>
    )

}