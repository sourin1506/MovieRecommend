import React, { useEffect, useState, useContext } from "react";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import styled from "styled-components";
import { MovieDataContext } from "../ContextApi/MovieDataContext";
import '../App.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  
  
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: white;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: white;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
 
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
  color:red;
`;




const MovieCardDisplay = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const { moviedetail } = useContext(MovieDataContext);
    const { selectedMovie } = props;

    useEffect(() => {
        getMovieData();
    }, [])


    const stars = Array.from({ length: 5 }, () => '🟊');
    const StarComponents = () => {
        let value = 0;

        value = parseInt(movieInfo.imdbRating);
        value = Math.floor((value / 10) * 5)



        return (
            <div>
                {
                    stars.map((s, i) => {
                        let style = '#ddd';
                        if (i < value) {
                            style = 'red';
                        }
                        return (
                            <span
                                className={'star'}
                                key={i}
                                style={{ color: style, width: 20, height: 30, fontSize: 30 }}

                            >
                                {s}
                            </span>
                        )
                    })
                }
            </div>
        )
    }

    const getMovieData = () => {
        //console.log(props.onMovieSelect)
        fetch(`http://www.omdbapi.com/?t=${props.selectedMovie}&apikey=42434bbe`)
            .then(response => response.json())
            .then(response => setMovieInfo(response))
            .catch(err => console.error(err));
    }

    return (
        <Container>

            {movieInfo ? (
                <>
                    <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
                    <InfoColumn>
                        <MovieName>
                            {movieInfo?.Type}: <span >{movieInfo?.Title}</span>
                        </MovieName>
                        <MovieInfo>
                            IMDB Rating: <span>{movieInfo?.imdbRating}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Year: <span>{movieInfo?.Year}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Language: <span>{movieInfo?.Language}</span>
                        </MovieInfo>

                        <MovieInfo>
                            Released: <span>{movieInfo?.Released}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Runtime: <span>{movieInfo?.Runtime}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Genre: <span>{movieInfo?.Genre}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Director: <span>{movieInfo?.Director}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Actors: <span>{movieInfo?.Actors}</span>
                        </MovieInfo>
                        <MovieInfo>
                            <StarComponents />
                        </MovieInfo>
                        <MovieInfo>
                            Plot: <span>{movieInfo?.Plot}</span>
                        </MovieInfo>
                    </InfoColumn>
                    <CancelOutlinedIcon fontSize="large" color="error" onClick={() => props.onMovieSelect()} />

                </>
            ) : (
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
        </Container>
    );
};
export default MovieCardDisplay;