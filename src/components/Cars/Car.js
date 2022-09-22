import {carService} from "../../services/car-api/car.service";

export default function Car({car,setCar}) {
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
        <div>
            <hr/>
            <div>
                <p>id: {id}</p>
                <p>model: {model}</p>
                <p>price: {price}</p>
                <p>year: {year}</p>
            </div>
            <div>
                <button onClick={() => deleteCar()}>Delete current Car</button>
            </div>
            <hr/>
        </div>)

}