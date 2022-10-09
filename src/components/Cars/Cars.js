import {useEffect, useState} from "react";

import Car from "./Car";
import CarForm from "./CarForm";
import {carService} from "../../services/car.service";

export default function Cars() {

    let [cars,setCars] = useState([]);
    let [updateCar,setUpdateCar] = useState(null);

    useEffect(() =>{
        carService.getAll().then(value => setCars(value.data));
    },[]);


    return(
        <div>
            <CarForm setCars={setCars} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
            {cars.map((car,index) =>(<Car car={car} key={index} setCar={setCars} setUpdateCar={setUpdateCar}/>))}
        </div>
    )

}