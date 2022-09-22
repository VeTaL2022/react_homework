import {useForm} from "react-hook-form";

import css from './UserForm.module.css'
import {userService} from "../../services/user-api/user.service";

export default function UserForm({setUsers}) {

    const {register,reset,handleSubmit, formState:{isValid}} = useForm({
        mode: 'all'
    });

    const submit = async (user) =>{
        const {data} = await userService.createUser(user);
        setUsers(users => [...users, data])
        reset();
    }

    // const submit = (obj) =>{
    //     userService.create(obj).then(({data}) => setUsers(users => [...users, data]))
    //     reset();
    // }

    return(
        <div className={css.UserFrom}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name', {required:true, minLength:{value:2 , message:'min 2 ch'}})}/>
                <input type="text" placeholder={'username'} {...register('username', {required:true, minLength:{value:3 , message:'min 3 ch'}})}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'phone'} {...register('phone', {required:true, valueAsNumber:true})}/>
                <input type="text" placeholder={'website'} {...register('website')}/>
                <button disabled={!isValid}>Add new User</button>
            </form>
        </div>
    )

}