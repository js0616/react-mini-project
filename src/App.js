import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Movies from './page/Movies';
import MoviesCopy from './page/Moviescopy';
import MovieDetail from './page/MovieDetail';

import Header from './components/Header'

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element ={<Movies/>}/>
        <Route path='/movies-copy' element ={<MoviesCopy/>}/>
        <Route path='/movies/:movie_no' element={<MovieDetail />}/>

      </Routes>
    
    </div>
  );
}

export default App;
