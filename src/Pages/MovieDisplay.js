import React, { useState, useContext } from "react";

import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import MovieCard from "../components/MovieCard";
import MovieCardDisplay from "../components/MovieCardDisplay";
import { MovieDataContext } from "../ContextApi/MovieDataContext";
import NotFoundPage from "../components/NotFoundPage";



const Container = styled.div`
  display: flex;
  flex-direction: column;
`;


const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;

function MovieDisplay() {

    const [selectedMovie, onMovieSelect] = useState();
    const { moviedetail } = useContext(MovieDataContext);
    const navigate = useNavigate();


    return (
        <Container>
            {moviedetail.length==0?<NotFoundPage/>:console.log(moviedetail.length)}
            {selectedMovie && <MovieCardDisplay selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
            <MovieListContainer>
                {moviedetail ? (
                    moviedetail.map((movie, index) => (
                        <MovieCard
                            key={index}
                            movie={movie}
                            onMovieSelect={onMovieSelect}
                        />
                    ))
                ) : (
                    <Placeholder src="/react-movie-app/movie-icon.svg" />
                )}
            </MovieListContainer>
        </Container>
    );
}

export default MovieDisplay;
