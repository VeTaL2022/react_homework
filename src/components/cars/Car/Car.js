import {useDispatch} from "react-redux";

import css from './Car.module.css';
import {carActions} from "../../../redux";

export function Car({car}) {
    const {id,model,price,year} = car;

    const dispatch = useDispatch();

    return(
        <div className={css.Car}>
            <div>
                <p>id: {id}</p>
                <p>model: {model}</p>
                <p>price: {price}</p>
                <p>year: {year}</p>
            </div>
            <button>Update</button>
            <button onClick={() => dispatch(carActions.deleteCar({id}))}>Delete</button>
        </div>)

}