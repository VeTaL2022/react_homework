import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import css from './CarForm.module.css'
import {carActions} from "../../../redux";

export function CarForm() {
    const {register, reset, handleSubmit, setValue} = useForm({mode: 'all'});

    const {setUpdate} = useSelector(state => state.carReducer);

    useEffect(() => {
        if (setUpdate) {
            setValue('model', setUpdate.model, {shouldValidate: true});
            setValue('price', setUpdate.model, {shouldValidate: true});
            setValue('year', setUpdate.year, {shouldValidate: true});
        }
    }, [setUpdate, setValue]);

    const dispatch = useDispatch();

    const submit = (data) => {
        if (setUpdate) {
            dispatch(carActions.updateCar({id: setUpdate.id, car: data}));
        } else {
            dispatch(carActions.createCar({car: data}))
        }
        reset();
    }
    return (
        <div className={css.CarForm}>

            <form onSubmit={handleSubmit(submit)}>
                <input type='text' placeholder='model' {...register('model')}/>
                <input type='text' placeholder='price' {...register('price')}/>
                <input type='text' placeholder='year' {...register('year')}/>
                <button>{setUpdate ? 'Update' : 'Add'}</button>
            </form>

        </div>
    )

}