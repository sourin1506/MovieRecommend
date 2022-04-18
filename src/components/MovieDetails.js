import React, { useState, useEffect, useContext } from 'react'
import { MovieDataContext } from '../ContextApi/MovieDataContext';
import { useNavigate } from 'react-router-dom';


export default function MovieDetails() {
    const { moviedata, setmovie, recommendlist, setrecommend, moviedetail, setdetails } = useContext(MovieDataContext);
    const table = [];
    const navigate = useNavigate();
    // useEffect(()=>{
    //     //getMovieData();
    //     getMovieRecommended();
    // },[])

    const getMovieData = () => {
        fetch(`http://www.omdbapi.com/?t=${moviedata}&apikey=42434bbe`)
            .then(response => response.json())
            .then(response => setdetails((prevState) => [
                ...prevState,
                [response],
            ]))
            .catch(err => console.error(err));
    }
    let str, i, moviename;

    const gettable = () => {
        Object.keys(recommendlist).map((data, index) => {
            table.push(recommendlist[index])
        })
        for (let j = 0; j < table.length; j++) {
            if (table[j] != undefined)
                table[j] = table[j].substr(0, table[j].indexOf('('))
        }
    }

    const getMovieRecommended = () => {
        console.log(table)
        Object.keys(recommendlist).map((data, index) => {

            str = recommendlist[index]
            if (str != undefined) {
                i = str.indexOf('(');
                moviename = str.substring(0, i)
                console.log(moviename)

                fetch(`http://www.omdbapi.com/?t=${moviename}&apikey=42434bbe`)
                    .then(response => response.json())
                    .then(response => setdetails((prevState) => [
                        ...prevState,
                        [response],
                    ]))
                    .catch(err => console.error(err));
            }

        })
    }
    useEffect(() => {

        getMovieData();

    }, [])
    useEffect(() => {

        getMovieRecommended()
        return () => {
            navigate("/MovieDisplay")
        }

    }, [moviedetail])

    return (
        <div>

            <button onClick={() => { gettable(); getMovieData(); getMovieRecommended() }}>CLick</button>
            <button onClick={() => console.log(moviedetail,)}>Details</button>
            <button onClick={() => navigate("/MovieDisplay")}>Go to page</button>
        </div>
    )
}
