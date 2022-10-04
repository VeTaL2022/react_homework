import {useForm} from "react-hook-form";

import {carService} from "../../services";
import css from './CarForm.module.css';

export function CarForm({setCars}) {
    const {handleSubmit, register, reset, formState:{isValid}} = useForm({
        mode: 'all'
    });

    const submit = async (car) => {
        const {data} = await carService.createCar(car);
        setCars(cars => [...cars, data])
        reset();
    }

    return(
        <div className={css.CarForm}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price', {required: true, valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {required: true, valueAsNumber: true})}/>
                <button disabled={!isValid}>Add new Car</button>
            </form>
        </div>
    )

}