import React from "react";
import {Badge} from 'react-bootstrap'
import { useSelector } from "react-redux";

import { Link, useNavigate } from 'react-router-dom'


const MovieCard = ({ movie }) => {

  const navigate = useNavigate()
  // npm install --save react-spinners
  // npm install react-multi-carousel --save

  const {genresMovies} = useSelector((state) => state.movie); 

  // console.log(genresMovies)

  // let grn1= movie.genre_ids.map((ids)=>(
  //   genresMovies?.find((grn,idx)=>(grn.id == ids)
  // )).name
  
  // )

  // console.log('dd',grn1)
 
  const div_styled = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie?.backdrop_path}`,
    width: "100%",
    height: "220px",
    backgroundSize: "100%",
    backgroundRepeat : "no-repeat"
  };


  // const gotToDetail = ()=>{
  //   navigate(`/movies/${movie.id}`)
  // }

  return (
    <div style={div_styled} className="movie-card">
      <Link to={`/movies/${movie.id}`}>
      <div className="overlay">
        <div>{movie.title}</div>
        {/* <div>{movie.genre_ids.map((ids)=>(
          <Badge bg="danger">{ids}</Badge>
        ))}</div> */}
        <div className="genres">{movie.genre_ids.map((ids, i)=>(
          // find(): 일치한 정보들 중 첫번째 요소만 반환하는 함수 
          <Badge bg="danger" key={i}>{genresMovies.find((grn,idx)=>(grn.id === ids)).name}</Badge>
        ))}</div>
      
        {/* <div className="genres">{movie.genre_ids.map((ids, i)=>(
          <Badge bg="danger" key={i}>{genresMovies.filter((grn,idx)=>(grn.id == ids))[0].name}</Badge>
        ))}</div> */}
        <div className="info">
          <span>평점 : {movie.vote_average}</span>
          <span>|</span>
          <span>{movie.adult? '청불':'청소년'}</span>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;
