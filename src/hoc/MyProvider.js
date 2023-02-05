import {createContext, useState} from "react";

const StateContext = createContext(null);

const MyProvider = ({children}) => {





    const [register, setRegister] = useState(null);
    const [, setListRegisterUser] = useState([]);

    const value = {setRegister, register, setListRegisterUser}


    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    );
};

export {MyProvider, StateContext};