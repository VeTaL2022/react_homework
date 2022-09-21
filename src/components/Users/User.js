import {userService} from "../../services/user-api/user.service";

export default function User({user,setUsers}) {
    const {id,name,username,email,phone,website} = user

    const deleteUser = async () =>{
        await userService.deleteById(id);
        setUsers(users =>{
            const index = users.findIndex(value => value.id===id);
            if(index !== -1) {
                users.splice(index, 1);
            }
            return[...users]
        })
    }
    return(
        <div>
            <hr/>
            <div>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>username: {username}</p>
                <p>email: {email}</p>
                <p>phone: {phone}</p>
                <p>website: {website}</p>
            </div>
            <div>
                <button onClick={() => deleteUser()}>Delete</button>
            </div>
            <hr/>
        </div>
    );
}