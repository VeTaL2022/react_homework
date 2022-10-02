import {useReducer} from "react";
import {useForm} from "react-hook-form";

let reducer = (state, action) => {
    switch (action.type) {
        case 'CAT':
            state.cats.push(action.payload)
            return {...state}
        case 'DOG':
            state.dogs.push()
            return {...state}
        default:
            return {...state}
    }
}
export function Animals() {
    let [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    let {register, handleSubmit} = useForm();
    console.log(state);

    return (
        <div>

            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <form onSubmit={handleSubmit(reducer)}>
                    <input type="text" placeholder={'cat'} {...register('Cat')}/>
                    <button onClick={() => dispatch({type: 'CAT', payload: 'lost'})}>Save</button>
                </form>
                <form onSubmit={handleSubmit(reducer)}>
                    <input type="text" placeholder={'dog'} {...register('Dog')}/>
                    <button onClick={() => dispatch({type: 'DOG'})}>Save</button>
                </form>
            </div>

            <hr/>

            {/*<div style={{display:'flex', justifyContent:'space-evenly'}}>*/}
            {/*    <p>{JSON.stringify(state)}</p>*/}
            {/*    /!*<p>Cat: {state.cats}</p>*!/*/}
            {/*    /!*<p>Dog: {state.dogs}</p>*!/*/}
            {/*</div>*/}

        </div>
    )
}
