import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {User} from "./User";

export function Users() {
    const userDispatch = useDispatch();
    const {users, error, loading, userFromApi} = useSelector(state => state.userReducer);

    useEffect(() => {
        // userService.getUser().then(({data}) => userDispatch(userActions.getAll(data)))
        userDispatch(userActions.getAllUsers());
    }, [])
    return (
        <div>
            {loading && <h2>Loading........................</h2>}
            {error && <h2>Error..............</h2>}
            {userFromApi && userFromApi.email}
            {users.map((user, index) => <User key={index} user={user}/>)}
        </div>
    )

}