import {Car} from "./Car";

export function Cars({cars, setCars}) {
    
    return(
        <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap', backgroundColor:'aquamarine'}}>
            {cars.map((car, index) => <Car car={car} key={index} setCars={setCars}/>)}
        </div>
    )

}