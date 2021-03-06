import React from "react";
import styled from "styled-components";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import Button from "@mui/material/Button";
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
const MovieCard = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie[0];

  return (
    <>
      {props ? (
        <MovieContainer
          onClick={() => {
            props.onMovieSelect(Title);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <CoverImage src={Poster} alt={Title} />
          <MovieName>{Title}</MovieName>
          <InfoColumn>
            <MovieInfo>Year : {Year}</MovieInfo>
            <MovieInfo>Type : {Type}</MovieInfo>
          </InfoColumn>
        </MovieContainer>
      ) : (
        console.log("Loading")
      )}
    </>
  );
};
export default MovieCard;
