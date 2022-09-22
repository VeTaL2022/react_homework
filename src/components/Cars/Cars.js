import {useEffect, useState} from "react";

import Car from "./Car";
import CarForm from "./CarForm";
import {carService} from "../../services/car-api/car.service";

export default function Cars() {

    let [cars,setCars] = useState([]);

    useEffect(() =>{
        carService.getAll().then(value => setCars(value.data));
    },[]);


    return(
        <div>
            <CarForm setCar={setCars}/>
            {cars.map((car,index) =>(<Car car={car} key={index} setCar={setCars}/>))}
        </div>
    )

}