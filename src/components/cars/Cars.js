import {Car} from "./Car";

export function Cars({cars, setCars}) {
    
    return(
        <div>
            {cars.map((car, index) => <Car car={car} key={index} setCars={setCars}/>)}
        </div>
    )

}