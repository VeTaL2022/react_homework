import {useNavigate} from "react-router-dom";

import css from './Header.module.css';

export function Header() {
    const navigate = useNavigate();

    return(
        <div className={css.Header}>
            <button onClick={() =>navigate('/login')}>Login</button>
            <button onClick={() =>navigate('/register')}>Register</button>
        </div>
    )

}