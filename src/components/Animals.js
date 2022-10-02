import {useRef} from "react";
import {useAnimalReducer} from "./reducer";

export function Animals() {
    let cat = useRef();
    let dog = useRef();

    let [catState, catDispatch] = useAnimalReducer([]);
    let [dogState, dogDispatch] = useAnimalReducer([]);


    let addCat = () =>{
        const {value} = cat.current;
        catDispatch({type: 'Add', payload: {name: value}})
    }
    let addDog = () =>{
        const {value} = dog.current;
        dogDispatch({type: 'Add', payload: {name: value}})
    }
    return(
        <div>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div>
                    <input type='text' ref={cat}/>
                    <button onClick={addCat}>Save</button>
                </div>
                <div>
                    <input type='text' ref={dog}/>
                    <button onClick={addDog}>Save</button>
                </div>
            </div>
            <hr/>
            <p>Cat: {catState.map(cat => <span>{cat.name}</span>)}</p>
            <p>Dog: {dogState.map(dog => <span>{dog.name}</span>)}</p>
        </div>
    )

}