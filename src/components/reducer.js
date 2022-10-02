import {useReducer} from "react";

let reducer = (state, action) => {
    switch (action.type){
        case 'Add':
            let name = action.payload.name;
            return [...state, {name}];
        default:
            return [...state];
    }
};

export let useAnimalReducer = () => useReducer(reducer,[]);