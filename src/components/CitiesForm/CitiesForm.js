import {useForm} from "react-hook-form";

import css from './CitiesForm.module.css'
import {weatherActions} from "../../redux";
import {useDispatch} from "react-redux";

const CitiesForm = () => {



    const {register, reset, handleSubmit} = useForm();

    const dispatch = useDispatch();


    const searchCity = (weather) => {
        console.log(weather)

        if(weather.city.length){
            dispatch(weatherActions.getWeatherCity(weather))
        }
    }


    return (
        <div>
            <div className={css.containerForm}>
                <form className={css.weatherForm} onChange={handleSubmit(searchCity)}>
                    <input className={css.weatherInput} type="text" placeholder={'Enter the name of the city...'} {...register('city')}/>
                    {/*<button className={css.weatherButton}>*/}
                    {/*   <div className={css.magni}>*/}
                    {/*       <MagnifyingGlassIcon/>*/}
                    {/*   </div>*/}
                    {/*</button>*/}
                </form>
            </div>
        </div>
    );
};

export {CitiesForm};