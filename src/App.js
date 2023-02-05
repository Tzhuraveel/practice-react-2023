import {useDispatch, useSelector} from "react-redux";


const App = () => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();


    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({type: 'INC'})}>INCREMENT</button>
            <button onClick={() => dispatch({type: 'DEC'})}>DECREMENT</button>
        </div>
    );
};

export {App};