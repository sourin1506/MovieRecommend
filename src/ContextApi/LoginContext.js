import React from 'react'
import { useState, createContext } from 'react'
export const LoginContext = createContext();

export default function LoginContextProvider(props) {

    const [name, setname] = useState("");
    const [islog, setlog] = useState(false);
    return (
        <LoginContext.Provider value={{ name, setname, setlog, islog }}>
            {props.children}
        </LoginContext.Provider>
    )
}
