import {useRef} from "react";
import {useAnimalReducer} from "./reducer";

export function Animals() {
    let catRef = useRef();
    let dogRef = useRef();

    let [catState, catDispatch] = useAnimalReducer([]);
    let [dogState, dogDispatch] = useAnimalReducer([]);


    let addCat = () =>{
        const {value} = catRef.current;
        catDispatch({type: 'Add', payload: {name: value}})
    }
    let addDog = () =>{
        const {value} = dogRef.current;
        dogDispatch({type: 'Add', payload: {name: value}})
    }

    return(
        <div>

            <div style={{display:'flex', justifyContent:'space-evenly'}}>
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

            <div style={{display:'flex' , justifyContent:'space-evenly'}}>
                <div>
                    {catState.map((cat, index) => <p>{cat.name} <button>Delete</button></p>)}
                </div>
                <div>
                    {dogState.map((dog, index) => <p>{dog.name} <button>Delete</button></p>)}
                </div>
            </div>

        </div>
    )
}