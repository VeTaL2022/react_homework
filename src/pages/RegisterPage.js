import {useForm} from "react-hook-form";
import {authService} from "../services";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import css from './RegisterPage.module.css';

export function RegisterPage() {

    const {handleSubmit, register} = useForm();
    const [error,setError] = useState(null);
    const navigate = useNavigate();

    const submit = async (user) => {
        try {
            await authService.registerUser(user);
            navigate('/login');
        } catch (e) {
            setError(e.response.data?.username)
        }
    };

    return (
        <div className={css.RegisterPage}>
            <form onSubmit={handleSubmit(submit)}>
                {error && <h3>{error}</h3>}
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Register</button>
            </form>
        </div>
    )

}