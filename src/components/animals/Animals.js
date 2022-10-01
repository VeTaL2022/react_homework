import {useReducer} from "react";
import {useForm} from "react-hook-form";

let reducer = (state, action) => {
    switch (action.type){
        case 'CAT':
            state.cats.push()
            return {...state}
        case 'DOG':
            state.dogs.push()
            return {...state}
        default:
            return {...state}
    }
}
export function Animals() {

    let [state, dispatch] = useReducer(reducer, {cats:[], dogs:[]});
    let {register,handleSubmit} = useForm();
    return(
        <div>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <form onSubmit={handleSubmit(reducer)}>
                    <input type="text" placeholder={'cat'} {...register('Cat')}/>
                    <button onClick={() => dispatch({type: 'CAT'})}>Save</button>
                </form>
                <form onSubmit={handleSubmit(reducer)}>
                    <input type="text" placeholder={'dog'} {...register('Dog')}/>
                    <button onClick={() => dispatch({type: 'DOG'})}>Save</button>
                </form>
            </div>
            <hr/>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <p>Cat: {}</p>
                {JSON.stringify(dispatch)}
                <p>Dog: {}</p>
            </div>
        </div>
    )
}