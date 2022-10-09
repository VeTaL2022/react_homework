import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import css from './CarForm.module.css'
import {carActions} from "../../../redux";

export function CarForm() {
    const {register, reset, handleSubmit, setValue} = useForm({mode: 'all'});

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(carActions.createCar({car:data}))
        reset();
    }
    return (
        <div className={css.CarForm}>

            <form onSubmit={handleSubmit(submit)}>
                <input type='text' placeholder='model' {...register('model')}/>
                <input type='text' placeholder='price' {...register('price')}/>
                <input type='text' placeholder='year' {...register('year')}/>
                <button>Add Car</button>
            </form>

        </div>
    )

}