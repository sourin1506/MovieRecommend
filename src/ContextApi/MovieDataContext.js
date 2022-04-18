import React from 'react'
import { useState, createContext } from 'react'
export const MovieDataContext = createContext();

export default function MovieDataContextProvider(props) {

    const [moviedata, setmovie] = useState("");
    const [recommendlist, setrecommend] = useState([])
    const [moviedetail, setdetails] = useState([]);
    return (
        <MovieDataContext.Provider value={{ moviedata, setmovie, recommendlist, setrecommend, moviedetail, setdetails }}>
            {props.children}
        </MovieDataContext.Provider>
    )
}
