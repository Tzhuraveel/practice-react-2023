import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carActions} from "../../redux";

import css from './Cars.module.css'
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";
import {useSearchParams} from "react-router-dom";

const Cars = () => {

    const dispatch = useDispatch();

    const {cars, prev, next} = useSelector(state => state.cars);
    const [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {
        dispatch(carActions.getAllCars({page: query.get('page')}))
    }, [dispatch, query])






    return (
        <div className={css.container__form}>
            <div className={css.cars}>
            <button onClick={() => setQuery(query => ({page: prev.page}))} disabled={!prev}>prev</button>
            <button onClick={() => setQuery(query => ({page: next.page}))} disabled={!next}>next</button>
                {cars && cars.map(value => <Car key={value.id} car={value}/>)}
            </div>
            <div className={css.form}>
                <CarForm/>
            </div>

        </div>
    );
};

export {Cars};