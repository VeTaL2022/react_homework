import {useForm} from "react-hook-form";
import {userService} from "../../services/user-api/user.service";

export default function UserForm({setUsers}) {

    const {register,reset,handleSubmit, formState:{isValid,errors}} = useForm({
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
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name', {
                    require: {value: true, message: 'Error'}
                })}/>
                {
                    errors.name && <span>{errors.name.message}</span>
                }
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'phone'} {...register('phone')}/>
                <input type="text" placeholder={'website'} {...register('website')}/>
                <button disabled={!isValid}>Save</button>
            </form>
        </div>
    )

}