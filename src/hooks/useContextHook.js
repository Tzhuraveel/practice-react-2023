import {useContext} from "react";
import {StateContext} from "../hoc/MyProvider";


export const useContextHook = () => useContext(StateContext)