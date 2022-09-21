import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";

export default function UserForm({setUsers}) {

    const {register, handleSubmit, reset, formState:{isValid}} = useForm({
        mode: 'all'
    });

    const submit = async (user) =>{
        const {data} = await userService.create(user);
        // setUsers(users => [...users, data])
        console.log(data);
    }

    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'phone'} {...register('phone')}/>
                <input type="text" placeholder={'website'} {...register('website')}/>
                <button disabled={!isValid}>Save</button>
            </form>
        </div>
    )

}