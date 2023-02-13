import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {

    const {id, brand, price, year} = car


    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.deleteCar({car}))}>delete</button>
            <button onClick={() => dispatch(carActions.updateCarLocal(car))}>update</button>
            <hr/>
        </div>
    );
};

export {Car};