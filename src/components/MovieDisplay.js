
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

// define a function that is our Component, always make sure to declare the props parameter so you can use props in your Component
//instead of props put curly bracees movies
const MovieDisplay = ({movie}) => {
    // function to return loaded JSX
      // the Component must return some JSX
  
  const loaded = ()=>{  
    
    // let genres = movie.Genre;
    // var newGenres = genres.replace(/[,]/g, ' -');
    
    if (movie.Response == "False") {
      return <h3 className='msg'>{movie.Error}</h3>
    }
    if (movie.Response == "True") {
      let genres = movie.Genre;
      var newGenres = genres.replace(/[,]/g, ' -');
   
    }
    

    return (
    <>

      <div className="info">
        <img src={movie.Poster} alt={movie.Title} className="poster"/>
        <div>
          <h2>{movie.Title}</h2>

          <div className="rating">
            <FontAwesomeIcon icon={faStar} style={{color: '#c39a7a'}}/>
            <h4>{movie.imdbRating}</h4>
          </div>

          <div className='details'>
            <span>{movie.Rated}</span>
            <span>{movie.Year}</span>
            <span>{movie.Runtime}</span>
          </div>

          <div className="genre">
              <div className='item'>{newGenres}</div>
          </div>

       </div>
    </div>

          <h3>Plot:</h3>
          <p>{movie.Plot}</p>
          <h3>Cast:</h3>
          <p>{movie.Actors}</p>
   
    </>
    
    );
   
  };

  // function to return loading JSX
  const loading = () => {
    
    return <h3 className='msg'>... Loading</h3>;
  };

  // ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
};
  
  
  
  // we must export the Component to use it in other files
  export default MovieDisplay;