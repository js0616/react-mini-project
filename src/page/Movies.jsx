import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import DropdownButton from "react-bootstrap/DropdownButton";

const Movies = () => {
  const { popularMovies } = useSelector(
    (state) => state.movie
  );

  const [filter, setfilter] = useState();

  // 클릭 -> 값 - > 변경에 따라 -> 필터 ? 실행?
  let arr = [];

  useEffect(() => {
    setfilter(popularMovies);
  }, []);

  useEffect(() => {
    
  }, [filter]);

  function handleMenu(eventKey) {
    eventKey = eventKey.split(' ')
    
    // console.log('eval',eval(eventKey[0]))
    // arr = popularMovies.slice().sort((a, b) => a.eval(eventKey[0]) - b.eval(eventKey[0]));
    if(eventKey[0] =='title'){
      arr = popularMovies.slice().sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (eventKey[0] =='vote_average'){
      arr = popularMovies.slice().sort((a, b) => a.vote_average - b.vote_average);
    }
    else{
      arr = popularMovies.slice().sort((a, b) => a.popularity - b.popularity);
    }
    
    if(eventKey.length > 1){
      arr.reverse()
    }

    console.log(eventKey, arr);

    setfilter(arr)

    // let aa = `console.log(popularMovies[0].${eventKey})`
    // new Function('return aa')
    // console.log(eventKey)
    // console.log('일반:',popularMovies[0])
    // setfilter(arr);
    
  }

  return (
    <div>
      <div>인기영화필터링</div>
      <div className="movie-filter">
        <div className="filter-box">
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>정렬</Accordion.Header>
                <Accordion.Body>
                  <DropdownButton
                    
                    variant={"secondary"}
                    title={'정렬할 기준 선택'}
                    onSelect={handleMenu}
                    data-bs-theme="dark"
                  >
                    <Dropdown.Item eventKey="title">제목 오름차순</Dropdown.Item>
                    <Dropdown.Item eventKey='title desc'>제목 내림차순</Dropdown.Item>
                    <Dropdown.Item eventKey="vote_average">평점 오름차순</Dropdown.Item>
                    <Dropdown.Item eventKey="vote_average desc">평점 내림차순</Dropdown.Item>
                    <Dropdown.Item eventKey="popularity">인기도 오름차순</Dropdown.Item>
                    <Dropdown.Item eventKey="popularity desc">인기도 내림차순</Dropdown.Item>
                    
                  </DropdownButton>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div></div>
        </div>

        <div className="movie-list">
          {filter?.map((item, i) => (
            <Card style={{ width: "18rem" }} key={i}>
              <Card.Img
                variant="top"
                src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.release_date}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
