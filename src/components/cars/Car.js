import {carService} from "../../services";
import css from './Car.module.css';

export function Car({car, setCars}) {
    const {id, model, price, year, photo} = car;

    const sendPhoto = async (e) => {
        const formData = new FormData();
        const [file] = e.target.files;
        formData.append('photo', file);
        const {data} = await carService.addPhotoById(id, formData);
        setCars(cars => {
            const find = cars.find(car => car.id === id);
            Object.assign(find, {...data, photo: URL.createObjectURL(file)})
            return [...cars]
        })
    }

    const deleteCar = async () => {
        await carService.deleteCarById(id);
        setCars(cars => {
            const index = cars.findIndex(value => value.id === id);
            if(index !== -1){
                cars.splice(index,1);
            }
            return [...cars]
        })
    }

    return (
        <div className={css.Car}>
            <p>id: {id}</p>
            <p>model: {model}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            {photo ?
                <img src={photo} alt={model}/>
                :
                <input type="file" onChange={sendPhoto}/>
            }
            <p>
                <button onClick={() => deleteCar()}>Delete Car</button>
            </p>
        </div>
    )

}