import {carService} from "../../services/car-api/car.service";
import css from './Car.module.css';

export default function Car({car,setCar,setUpdateCar}) {
    const {id,model,price,year} = car;

    const deleteCar = async () =>{
        await carService.deleteById(id);
        setCar(cars =>{
            const index = cars.findIndex(value => value.id===id);
            if(index !== -1){cars.splice(index, 1)}
            return [...cars]
        })
    }
    return(
        <div className={css.Car}>
            <div>
                <p>id: {id}</p>
                <p>model: {model}</p>
                <p>price: {price}</p>
                <p>year: {year}</p>
            </div>
            <div>
                <button onClick={() => setUpdateCar(car)}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
            </div>
        </div>)

}