// import the useState hook from react
import{ useState, useEffect} from 'react';

import './App.css';
import './index.css'
// WE IMPORT OUR COMPONENTS
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  // variable with your apiKey
  const API_KEY = process.env.REACT_APP_ACCESS_KEY;
  // state to hold movie data
  const [ movie, setMovie ] = useState(null);
// function to getMovies
  const getMovie = async(searchterm) => {
    // make fetch request and store response
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchterm}`)
    // parse JSON response into a javascript object
    const data = await response.json();
     // set the Movie state to the movie
     setMovie(data);
     console.log(data);
    
  }
 
//when you want something to display on the screen before submitting anything..if you pass and empty array [] to useEffect, the useEffect will only run once - when the app is first loaded
  useEffect(() => {
    getMovie("You've got mail");
  }, []);

  // USE OUR COMPONENTS IN APP's RETURNED JSX
  // we pass the getMovie function as a prop
  return (
    <div className="container">
      <Form getMovie={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
