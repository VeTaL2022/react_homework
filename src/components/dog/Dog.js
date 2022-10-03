export function Dog({item:dog, dispatch}) {

    return(
        <div>
            <p>
                {dog.name} <button onClick={() =>
                dispatch({type: 'deleteDog', payload: dog.id})}>Delete</button>
            </p>
        </div>
    )

}