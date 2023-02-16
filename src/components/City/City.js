import css from './City.module.css';
import {useDispatch} from "react-redux";

const City = ({city}) => {

    const {name, country, state} = city

    const dispatch = useDispatch();


    return (
        <div className={css.containerCity} onClick={() => dispatch()}>
            <div className={css.cityTitle}>{name}</div>
            <div>
                <span className={css.info}>country: {country}</span>
                <span className={css.info}>state: {state}</span>
            </div>
        </div>
    );
};

export {City};