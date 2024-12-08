import { useState } from "react";
const {tempMovieData} = require('../data/MovieData.js');
const {tempWatchedData} = require('../data/WatchedMovieData.js');

console.log(tempWatchedData);



const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);


function Logo(){
    return (
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
    )
}


function Search(){
    const [query, setQuery] = useState("");
    return (
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
    )
}


function NumResults({movies}) {
    return (
        <p className="num-results">
            Found <strong>{movies.length}</strong> results
            {/* Found <strong>X</strong> results */}
        </p>
        
    )
}


// function Navbar({movies}) {
function Navbar({children}) {

    return (
        <nav className="nav-bar">
            {children}
        {/* <Logo />
        <Search />
        <NumResults movies={movies} /> */}
      </nav>

    )
}


function Movie({movie}){
    return (
        <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
            <p>
                <span>🗓</span>
                <span>{movie.Year}</span>
            </p>
            </div>
        </li>
    )
}


function MovieList({movies}) {
    
    return (
        <ul className="list">
            {movies?.map((movie) => (
            <Movie movie={movie} />
            ))}
        </ul>
    )
}


// function ListBox({children}) {
    
//     const [isOpen1, setIsOpen1] = useState(true);

//     return (
//         <div className="box">
//           <button
//             className="btn-toggle"
//             onClick={() => setIsOpen1((open) => !open)}
//           >
//             {isOpen1 ? "–" : "+"}
//           </button>
//           {isOpen1 && (
//             children
//             // <MovieList movies={movies}/>
//           )}
//         </div>
//     )
    
// }


function Box({children}) {
    
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "–" : "+"}
          </button>
          {isOpen && (
            children
            // <MovieList movies={movies}/>
          )}
        </div>
    )
    
}


function WatchedSummary({watched}){
    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
    const avgUserRating = average(watched.map((movie) => movie.userRating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));

    return (
        <div className="summary">
            <h2>Movies you watched</h2>
            <div>
                <p>
                <span>#️⃣</span>
                <span>{watched.length} movies</span>
                </p>
                <p>
                <span>⭐️</span>
                <span>{avgImdbRating}</span>
                </p>
                <p>
                <span>🌟</span>
                <span>{avgUserRating}</span>
                </p>
                <p>
                <span>⏳</span>
                <span>{avgRuntime} min</span>
                </p>
            </div>
        </div>
    )
}


function WatchedList({watched}) {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                    <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                    </p>
                    <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                    </p>
                    <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                    </p>
                </div>
                </li>
            ))}
        </ul>
    )
}



// function WatchedBox(){
//     const [isOpen2, setIsOpen2] = useState(true);
//     const [watched, setWatched] = useState(tempWatchedData);
    
//     return (
//         <div className="box">
//           <button
//             className="btn-toggle"
//             onClick={() => setIsOpen2((open) => !open)}
//           >
//             {isOpen2 ? "–" : "+"}
//           </button>
//           {isOpen2 && (
//             <>
//                 <WatchedSummary watched={watched}/>
//                 <WatchedList watched={watched} />
    
//             </>
//           )}
//         </div>
//     )
// }


function Main({children}) {
    return (
        <main className="main">
        {children}
      </main>
    )
}


export default function App() {
    const [movies, setMovies] = useState(tempMovieData);
    const [watched, setWatched] = useState(tempWatchedData);
    return (
        <>
        {/* <Navbar movies={movies}/> */}
        <Navbar>
            <Logo />        {/* stateless Component*/}
            <Search />
            <NumResults movies={movies} />
        </Navbar>
        {/* <Main movies={movies}/> */}
        <Main>
            {/* <ListBox movies={movies}/> */}
            {/* <ListBox>
                <MovieList movies={movies} />
            </ListBox> */}
            <Box>
                <MovieList movies={movies} />
            </Box>
            {/* <WatchedBox /> */}
            <Box>
                <WatchedSummary watched={watched}/>
                <WatchedList watched={watched} />
            </Box>
        </Main>
        </>
    );
}