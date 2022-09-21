import {userService} from "../../services/user.service";

export default function User({user,setUsers}) {
    const {id,name,username,email,phone,website} = user

    const deleteUser = async () =>{
        await userService.deleteById(id);
        setUsers(users =>{
            const index = users.findIndex(value => value.id===id);
            users.splice(index, 1);
            return[...users]
        })
    }
    return(
        <div>
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>username: {username}</div>
                <div>email: {email}</div>
                <div>phone: {phone}</div>
                <div>website: {website}</div>
            </div>
            <div>
                <button>Update</button>
                <button onClick={() => deleteUser()}>Delete</button>
            </div>
        </div>
    );
}