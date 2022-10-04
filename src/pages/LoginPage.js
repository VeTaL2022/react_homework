import {useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";

import {authService} from "../services";
import css from './LoginPage.module.css'

export function LoginPage() {

    const {handleSubmit, register} = useForm();

    const navigate = useNavigate();
    const [query,] = useSearchParams();
    const submit = async (user) => {
        try {
            const {data} = await authService.loginUser(user);
            authService.setTokens(data);
            navigate('/cars');
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className={css.LoginPage}>
            {query.has('expSession') && <h2>Session has been Expired!</h2>}
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    )

}