import { createContext, useEffect, useReducer } from "react";
import Reducer from "./reducer";

const INITIAL_STATE = {
    userinfo: JSON.parse(localStorage.getItem("user")) || null,
    isfetching: false,
    error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.userinfo))
    },[state.userinfo]);

    return (
        <Context.Provider value={{
            userinfo:state.userinfo,
            isfetching:state.isfetching,
            error:state.error,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}