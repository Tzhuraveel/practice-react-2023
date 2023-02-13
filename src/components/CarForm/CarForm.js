import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './CarForm.module.css';
import {carValidator} from "../../validators";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {

    const dispatch = useDispatch();
    const {updatedCar} = useSelector(state => state.cars);

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: 'all', resolver: joiResolver(carValidator)});

    useEffect(() => {
        if(updatedCar){
            setValue('brand', updatedCar.brand)
            setValue('price', updatedCar.price)
            setValue('year', updatedCar.year)
        }
    }, [updatedCar, setValue])


    const create = async (car) => {
        await dispatch(carActions.createCar({car}))
    }

    const update = async (car) => {
        await dispatch(carActions.updatedCar({updatedCar, car}))
    }






    return (
        <div className={css.container__carForm}>
            <form onSubmit={handleSubmit(updatedCar?update:create)} className={css.form}>
                <div className={css.errors}>
                    <div className={css.error}>{errors.brand && errors.brand.message}</div>
                    <div className={css.error}>{errors.price?.message}</div>
                    <div className={css.error}>{errors.year?.message}</div>
                </div>
                <input className={css.input} type="text" placeholder={'brand'} {...register('brand')}/>
                <input className={css.input} type="number" placeholder={'price'} {...register('price')}/>
                <input className={css.input} type="number" placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{updatedCar?'UPDATE':"CREATE" }</button>
            </form>
        </div>
    );
};

export {CarForm};