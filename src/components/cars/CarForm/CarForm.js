import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import css from './CarForm.module.css'
import {carActions} from "../../../redux";

export function CarForm() {
    const {register, reset, handleSubmit, setValue} = useForm({mode: 'all'});

    const {update} = useSelector(state => state.carReducer);

    useEffect(() => {
        if (update) {
            setValue('model', update.model, {shouldValidate: true});
            setValue('price', update.model, {shouldValidate: true});
            setValue('year', update.year, {shouldValidate: true});
        }
    }, [update, setValue]);

    const dispatch = useDispatch();

    const submit = (data) => {
        if (update) {
            dispatch(carActions.updateCar({id: update.id, car: data}));
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
                <button>{update ? 'Update' : 'Add'}</button>
            </form>

        </div>
    )

}