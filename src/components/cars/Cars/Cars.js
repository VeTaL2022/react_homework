import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import {carActions} from "../../../redux";

export function Cars() {

    const carDispatch = useDispatch();
    const {cars} = useSelector(state => state.carReducer);

    useEffect(() => {
        carDispatch(carActions.getAllCars());
    }, [carDispatch]);

    return (
        <div>
            {cars.map((car, index) => (<Car car={car} key={index}/>))}
        </div>
    )

}