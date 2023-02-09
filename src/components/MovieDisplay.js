// define a function that is our Component, always make sure to declare the props parameter so you can use props in your Component
//instead of props put curly bracees movies
const MovieDisplay = ({movie}) => {
    // function to return loaded JSX
      // the Component must return some JSX
  
    const loaded = ()=>{  return (
        <>
    <h1>{movie.Title}</h1>
    <h2>{movie.Genre}</h2>
    <img src={movie.Poster} alt={movie.Title}/>
    <h2>{movie.Year}</h2>
    </>
    );
  };

  // function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  // ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
};
  
  
  
  // we must export the Component to use it in other files
  export default MovieDisplay;