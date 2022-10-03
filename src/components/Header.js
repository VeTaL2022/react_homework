import {useNavigate} from "react-router-dom";

export function Header() {
    const navigate = useNavigate();

    return(
        <div style={{display:'flex', justifyContent:'flex-end'}}>
            <button onClick={() =>navigate('/login')}>Login</button>
            <button onClick={() =>navigate('/register')}>Register</button>
        </div>
    )

}