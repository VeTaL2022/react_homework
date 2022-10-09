import {useForm} from "react-hook-form";
import {useEffect} from "react";

import css from './CarForm.module.css'
import {carService} from "../../../services";

export function CarForm({setCars, updateCar,setUpdateCar}) {

    const {register, reset, handleSubmit, formState:{isValid},setValue} = useForm({
        mode: 'all'
    });

    useEffect(() =>{
        if(updateCar){
            setValue('model', updateCar.model, {shouldValidate:true})
            setValue('price', updateCar.price, {shouldValidate:true})
            setValue('year', updateCar.year, {shouldValidate:true})

        }
    })
    const submit = async (obj) =>{
        if (updateCar){
            const {data} = await carService.updateById(updateCar.id, obj);
            setCars(cars => {
                const findCar = cars.find(value => value.id === updateCar.id);
                Object.assign(findCar,data);
                setUpdateCar(null);
                return [...cars]
            })
        } else {
            const {data} = await carService.createCar(obj);
            setCars(cars => [...cars, data]);
        }
        reset();
    }

    return(
        <div className={css.CarForm}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model', {required:true, minLength:{value:3, message:'minimum 3 ch'}})}/>
                <input type="text" placeholder={'price'} {...register('price', {required:true, valueAsNumber:true})}/>
                <input type="text" placeholder={'year'} {...register('year', {required:true, valueAsNumber:true})}/>
                <button disabled={!isValid}>{updateCar ? 'Update' : 'add Car'}</button>
            </form>
        </div>
    )

}