export function Cat({item:cat,dispatch}) {

    return(
        <div>
            <p>
                {cat.name} <button onClick={() =>
                    dispatch({type: 'deleteCat', payload: cat.id})}>Delete</button>
            </p>
        </div>
    )

}