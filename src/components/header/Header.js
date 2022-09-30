import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css';

export function Header() {
    let navigate = useNavigate();
    return (
        <div>
            <div className={css.Header}>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </div>
            <div>
                <button onClick={() =>navigate(-1)}>Previous</button>
                <button onClick={() =>navigate(1)}>Next</button>
            </div>
        </div>
    )

}