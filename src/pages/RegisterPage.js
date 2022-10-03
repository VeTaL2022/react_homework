import {useForm} from "react-hook-form";
import {authService} from "../services";

export function RegisterPage() {

    const {handleSubmit, register} = useForm();

    const submit = async (user) => {
        try {
            await authService.registerUser(user);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Register</button>
        </form>
    )

}