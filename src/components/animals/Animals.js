import {useRef} from "react";

import {useAnimalsReducer} from "../reducer/reducer";
import {Cat} from "../cat/Cat";
import {Dog} from "../dog/Dog";
import css from './Animals.module.css'

export function Animals() {

    const catRef = useRef();
    const dogRef = useRef();

    const [state, dispatch] = useAnimalsReducer();

    const addCat = () =>{
        const {value} = catRef.current;
        dispatch({type: 'addCat', payload: value});
        catRef.current.value = '';
    }

    const addDog = () =>{
        const {value} = dogRef.current;
        dispatch({type: 'addDog', payload: value});
        dogRef.current.value = '';
    }

    return(
        <div className={css.Animals}>

            <div>
                <div>
                    Add Cat: <input type='text' ref={catRef}/>
                    <button onClick={addCat}>Save</button>
                </div>
                <div>
                    Add Dog: <input type='text' ref={dogRef}/>
                    <button onClick={addDog}>Save</button>
                </div>
            </div>

            <hr/>

            <div className={'body'}>
                <div>
                    {state.cats.map((cat, index) =>
                        (<Cat item={cat} key={index} dispatch={dispatch}/>))}
                </div>
                <div>
                    {state.dogs.map((dog, index) =>
                        (<Dog item={dog} key={index} dispatch={dispatch}/>))}
                </div>
            </div>

        </div>
    )
}