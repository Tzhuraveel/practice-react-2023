import {useContextHook} from "../hooks/useContextHook";
import {Navigate} from "react-router-dom";

const Required = ({children}) => {


    const {register} = useContextHook();

    if(!register){
        return <Navigate to={'register'}></Navigate>
    }


    return children
};

export {Required};