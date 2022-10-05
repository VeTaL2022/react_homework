import {NavLink} from "react-router-dom";

import css from './Header.module.css';
export function Header() {

    return(
        <div className={css.Header}>
            <span><NavLink to={'/home'}>Home</NavLink></span>
            <span><NavLink to={'/users'}>Users</NavLink></span>
            <span><NavLink to={'/posts'}>Posts</NavLink></span>
            <span><NavLink to={'/comments'}>Comments</NavLink></span>
        </div>
    )

}