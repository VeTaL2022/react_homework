import {useEffect, useState} from "react";

import {getSpaceAxios} from "../../Services/spaceX.api";
import SpaceX from "./SpaceX";


export default function SpacesX() {
    let [spaces,setSpaces] = useState([]);

    useEffect(() =>{
        getSpaceAxios().then(value => {
            let filter = value.data.filter(space => space.launch_year !== '2020');
            setSpaces(filter);
        })
        },[]);

    return (
        <div className='space'>
            {spaces.length?spaces.map((space,index) => (<SpaceX item={space} key={index}/>)):<h2>Loading....</h2>}
        </div>);
}
