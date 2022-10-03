import {useReducer} from "react";

const reducer = (state, action) => {

    switch (action.type){
        case 'addCat':
            return {...state, cats: [...state.cats, {name: action.payload, id: Date.now()}]};
        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: action.payload, id: Date.now()}]};

        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)};
        case  'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)};

        default:
            return {...state};
    }
};

export const useAnimalsReducer = () => useReducer(reducer,{cats:[], dogs:[]});