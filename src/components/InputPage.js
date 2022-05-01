import React, { useState, useContext, useEffect } from "react";
import { MovieDataContext } from "../ContextApi/MovieDataContext";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function InputPage() {
  const {
    moviedata,
    setmovie,
    recommendlist,
    setrecommend,
    moviedetail,
    setdetails,
  } = useContext(MovieDataContext);

  const [isClicked, setclicked] = useState(false);
  const [nolist, setnolist] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getdetail();
  }, []);
  useEffect(() => {
    // if (!recommendlist && isClicked) navigate("/SearchBox");
    // else getMovieData();
    if (recommendlist == undefined && nolist) {
      alert("No movie found");
      navigate("/SearchBox");
    } else getMovieData();
    // setTimeout(() => {
    //     handleclick();
    // }, 2000);
  }, [recommendlist]);

  useEffect(() => {
    if (isClicked) {
      getMovieRecommended();
      console.log(moviedetail);
      navigate("/MovieDisplay");
    }
  }, [isClicked]);

  const getdetail = () => {
    //console.log("changing recommend file")
    const url1 = `http://mysterious-meadow-02585.herokuapp.com/movie?title=${moviedata}`;
    const url = `http://127.0.0.1:5000/movie?title=${moviedata}`;
    fetch(url1, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setrecommend(data.Title);
        console.log("recomend changed");
        setnolist(true);
        //to check if there is a recomment list or not so as to call the getMovieData becoz then we can call getMovieRecomment
      })
      .catch((err) => console.log("failed"));
  };
  //Movie Details Page

  const getMovieData = () => {
    //console.log("iron man details")
    fetch(`http://www.omdbapi.com/?t=${moviedata}&apikey=42434bbe`)
      .then((response) => response.json())
      .then((response) => {
        if (recommendlist.length != 0) {
          //so that it can enter only once and not twice prb due to many async function
          console.log(recommendlist, "inside");
          setdetails((prevState) => [...prevState, [response]]);
          setclicked(true);
        }
      });

    console.log("going out of irom man");
  };
  let str, i, moviename;

  const getMovieRecommended = () => {
    // console.log("MovieRecommend FInally")
    if (recommendlist?.length == 0) console.log("No list");
    Object.keys(recommendlist).map((data, index) => {
      str = recommendlist[index];
      if (str != undefined) {
        i = str.indexOf("(");
        moviename = str.substring(0, i);
        if (moviename.indexOf(",") != -1)
          moviename = moviename.substr(0, moviename.indexOf(","));
        //console.log(moviename)

        fetch(`http://www.omdbapi.com/?t=${moviename}&apikey=42434bbe`)
          .then((response) => response.json())
          .then((response) => {
            setdetails((prevState) => [...prevState, [response]]);
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <div className="input-box">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!isClicked}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
