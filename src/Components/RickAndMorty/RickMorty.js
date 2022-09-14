import {useState} from "react";
import RickMortyMain from "./RickMortyMain";

export default function RickMorty() {
    let [values,setValues] = useState([]);

    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(value => {
            setValues(value.results.splice(0,6));//setValues(value)
        });

    return(
        <div>
            {values.map((value,index) => (<RickMortyMain item={value} key={index}/>))}
        </div>
    );
}