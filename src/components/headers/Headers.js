import {Link} from "react-router-dom";

export function Headers() {

    return(
        <div>
           <h3>Menu</h3>
            <div><Link to={'users'}>Users</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
        </div>
    )

}