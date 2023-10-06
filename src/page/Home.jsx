import React, { useState } from "react";
import api from "../api";
import { useEffect } from "react";
import { MovieReducerActions } from "../redux/reducers/MovieSlicer";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Movislide from "../components/Movislide";

// 로딩
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {

  // 1개씩 요청 하는 방법
  // const popularReq = async ()=>{
  //   let res = await api.get('/movie/popular?language=ko-KR&page=1')
  //   console.log('popular',res.data)
  // }

  // const topRatedReq = async ()=>{
  //   let res = await api.get('/movie/top_rated?language=ko-KR&page=1')
  //   console.log('topRated',res.data)
  // }

  // const upComingReq = async ()=>{
  //   let res = await api.get('/movie/upcoming?language=ko-KR&page=1')
  //   console.log('upcoming',res.data)
  // }

  // 3가지 종류의 영화목록을 묶어서 요청하는 방법


  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const getMovieList = async () => {

    // 데이터를 가져오기 전
    setloading(true);

    // api 요청
    const popularList = api.get("/movie/popular?language=ko-KR&page=1");
    const topRatedList = api.get("/movie/top_rated?language=ko-KR&page=1");
    const upcomingList = api.get("/movie/upcoming?language=ko-KR&page=1");
    const genresList = api.get('/genre/movie/list?language=ko-KR')
  
    

    const [popular, topRated, upcoming, genres] = await Promise.all([
      popularList,
      topRatedList,
      upcomingList,
      genresList
    ]);

    // console.log(data);
    console.log(popular);
    console.log(topRated);
    console.log(upcoming);
    console.log(genres)
    dispatch(
      MovieReducerActions.initData({
        popular: popular.data,
        topRated: topRated.data,
        upcoming: upcoming.data,
        genres: genres.data
      })
    );

    // 데이터를 가져온 후
    setloading(false);
  };

  useEffect(() => {
    // popularReq()
    // topRatedReq()
    // upComingReq()
    getMovieList();
  }, []);

  // // 영화정보 가져오기
  // const popularMovies = useSelector((state) => state.movie.popularMovies);
  // const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);
  // const upcomingMovies = useSelector((state) => state.movie.upcomingMovies);

  const {popularMovies,topRatedMovies,upcomingMovies} = useSelector((state) => state.movie);

  // true : 데이터를 가져오기 전
  // false : 데이터를 가져온 후

  return (
    <div>
      {loading ? (
        <ClipLoader 
          color="#ffffff"
          loading ={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"

        />
      ) : (
        <>
        {/*loading 추가 후  {popularMovies &&} , ? 빼도 된다. */} 
        <Banner movie={popularMovies[0]} />
        <div className="slide-title"> PopularMovies </div>
        <Movislide movies={popularMovies}/>
        <div className="slide-title"> TopRatedMovies </div>
        <Movislide movies={topRatedMovies}/>
        <div className="slide-title"> UpcomingMovies </div>
        <Movislide movies={upcomingMovies}/>
        </>
        )}
            
    </div>
  );
};

export default Home;
