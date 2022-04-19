import React, { useState, useContext, useEffect } from 'react'
import { MovieDataContext } from '../ContextApi/MovieDataContext';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


import Button from '@mui/material/Button';

let isClicked = true;
export default function InputPage() {

    const { moviedata, setmovie, recommendlist, setrecommend, moviedetail, setdetails } = useContext(MovieDataContext);
    const [open, setopen] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        getdetail();

    }, [])
    useEffect(() => {

        getMovieData();
        // setTimeout(() => {
        //     handleclick();
        // }, 2000);



    }, [recommendlist])

    // useEffect(()=>{
    //     getMovieRecommended();

    // },[moviedetail])
    // useEffect(()=>{
    //     navigate("/MovieDisplay")

    // },[isClicked])


    const getdetail = () => {
        //console.log("changing recommend file")
        const url1 = `http://mysterious-meadow-02585.herokuapp.com/movie?title=${moviedata}`
        const url = `http://127.0.0.1:5000/movie?title=${moviedata}`
        fetch(url, {
            method: "GET"
        }).then((resp) => 
            resp.json())
        .then((data) => { setrecommend(data.Title); console.log("recomend changed") })
        .catch((err) => console.log("failed"));


    }
    //Movie Details Page

    const getMovieData = () => {
        //console.log("iron man details")
        fetch(`http://www.omdbapi.com/?t=${moviedata}&apikey=42434bbe`)
            .then(response => response.json())
            .then(response => {
                if (recommendlist.length != 0) //so that it can enter only once and not twice prb due to many async function
                {
                    console.log(recommendlist);
                    setdetails((prevState) => [
                        ...prevState,
                        [response],
                    ])
                }

            })
            .catch(err => console.error(err));
        console.log("going out of irom man")
    }
    let str, i, moviename;


    const getMovieRecommended = () => {
        // console.log("MovieRecommend FInally")
        Object.keys(recommendlist).map((data, index) => {

            str = recommendlist[index]
            if (str != undefined) {
                i = str.indexOf('(');
                moviename = str.substring(0, i)
                if (moviename.indexOf(',') != -1)
                    moviename = moviename.substr(0, moviename.indexOf(','));
                //console.log(moviename)

                fetch(`http://www.omdbapi.com/?t=${moviename}&apikey=42434bbe`)
                    .then(response => response.json())
                    .then(response => {
                        setdetails((prevState) => [
                            ...prevState,
                            [response],
                        ])
                    })
                    .catch(err => console.error(err));

            }

        })
    }

    const handleclick = () => {
        setopen(false);
        getMovieRecommended();
        navigate("/MovieDisplay")

    }

    return (
        <div className='input-box'>

            <Backdrop

                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleclick}

            >
                <CircularProgress color="inherit" />
            </Backdrop>



        </div>
    )
}
