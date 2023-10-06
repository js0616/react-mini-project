import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

import { Badge } from "react-bootstrap";
import Review from "../components/Review";

const MovieDetail = () => {

  const { movie_no } = useParams();

  // movies/1 -> useParams()
  // movies?id=1 -> useSearchParams()

  const [movieInfo, setMovieInfo] = useState();
  const [reviews, setReviews] = useState()


  // const getMovieDetail =async ()=>{
  //   let res = await api.get(`/movie/${movie_no}?language=ko`)
  //   console.log('[movieDetail.js]', res.data);
  // }

  // console.log(movie_no)
  const get_detail = async () => {
    const movie_detail = api.get(`/movie/${movie_no}?language=ko-KR`);
    const movie_review = api.get(`/movie/${movie_no}/reviews?language=en-US&page=1`)


    const [detail, review] = await Promise.all([
      movie_detail,
      movie_review
    
    ]);

    console.log("dd", detail);
    // console.log('리뷰',review)

    setMovieInfo(detail.data);
    setReviews(review.data.results)
  };

  // Promise constructor cannot be invoked without 'new' -> 에러

  useEffect(() => {
    get_detail();
  }, []);

  const div_style = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/original/${movieInfo?.poster_path})`,
  };

  return (
    <div>
      {movieInfo ? (
        <div>
          <div>
            {/* 영화 정보 */}
            <div className="detail-box">
              <div style={div_style} className="detail-img"></div>
              <div className="detail-info">
                <div className="detail-gen">
                  {movieInfo.genres.map((gen, i) => (
                    <Badge bg="danger" key={i}>
                      {gen.name}
                    </Badge>
                  ))}
                </div>
                <div className="detail-title">{movieInfo.title}</div>
                <div >{movieInfo.tagline}</div>
                <div className="detail-etc">
                  <div>출시일 : {movieInfo.release_date} |</div>
                  <div>러닝타임 : {movieInfo.runtime} 분 |</div>
                  <div>평점 : {movieInfo.vote_average} |</div>
                  <div>{movieInfo.adult ? "성인" : "18세 미만"} </div>
                </div>
                
                <div className="detail-overview">{movieInfo.overview}</div>
                <div></div>
                
              </div>
            </div>
            {/* 영화 리뷰 */}
            <div>
              {reviews.map((item,i)=>(
                <Review key={i} review = {item}/>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieDetail;
