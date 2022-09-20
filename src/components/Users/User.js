export default function User({item:user}) {
    
    return(
        <div>
            <h2>{user.id} - {user.name}</h2>
        </div>
    );

}