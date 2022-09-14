import {useState} from "react";
import RickMortyMain from "./RickMortyMain";

export default function RickMorty() {
    let [values,setValues] = useState([]);

    fetch("https://rickandmortyapi.com/api/character/10,20,30,40,50,60")
        .then(response => response.json())
        .then(value => {
            setValues(value);
        });

    return(
        <div>
            {values.map((value,index) => (<RickMortyMain item={value} key={index}/>))}
        </div>
    );
}