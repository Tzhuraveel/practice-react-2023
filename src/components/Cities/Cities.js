import {useSelector} from "react-redux";

import css from './Cities.module.css'
import {CitiesForm} from "../CitiesForm/CitiesForm";
import {City} from "../City/City";



const Cities = () => {

    const {cities} = useSelector(state => state.weather);
    console.log(cities)



    return (
        <div className={css.containerSearch}>
            <CitiesForm/>
            <div className={css.containerCities}>
                {cities && cities.map(city => <City key={city.lat} city={city}/>)}
            </div>
        </div>
    );
};

export {Cities};