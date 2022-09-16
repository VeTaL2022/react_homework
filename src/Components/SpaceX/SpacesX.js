import {useEffect, useState} from "react";

import {getSpaceAxios} from "../../Services/spaceX.api";
import SpaceX from "./SpaceX";


export default function SpacesX() {
    let [spaces,setSpaces] = useState([]);

    useEffect(() =>{
        getSpaceAxios().then(value => setSpaces(value.data));
        },[]);

    return (
        <div>
            {spaces.map((space,index) => (<SpaceX item={space} key={index}/>))}
        </div>);
}
