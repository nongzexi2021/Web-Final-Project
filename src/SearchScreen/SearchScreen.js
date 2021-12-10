// import React from "react";
// import {useState,useEffect} from "react";
// import {Link,  useNavigate, useParams} from "react-router-dom";
//
//
// const SearchScreen = ()=>{
//     const params = useParams();
//     const navigate = useNavigate();
//     const movieTitle = params.searchTerm || 'batman'
//     const[searchTerm,setSearchTerm] = useState(movieTitle);
//     const[results,setResults] = useState([]);
//     const findMovies = () =>
//         navigate(`/${searchTerm}`)
//         fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=73e6a391`).then(res=>res.json())
//         .then(results=>setResults(results.Search))
//     useEffect(findMovies,[]);
//     return(
//         <div>
//             <h1>
//                 Search Screen
//             </h1>
//             <input onChange={(e) => setSearchTerm(e.target.value)} value = {searchTerm}/>
//             <button onClick={findMovies}>Search</button>
//             {JSON.stringify(params)}
//             {searchTerm}
//
//                 <ul>
//                     {
//                         results.map(result =>
//                         <li key={result.imdbID}>
//                             <Link to={`/details/${result.imdbID}`}>
//                             <img src = {result.Poster} height={100}/>
//                             {/*{result.Poster}*/}
//                             {result.Title}
//                             </Link>
//                         </li>)
//                     }
//                 </ul>
//
//         </div>
//     )
// };
// export default SearchScreen