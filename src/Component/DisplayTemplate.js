import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const DisplayTemplate = () => {

    const[results,setResults] = useState([]);

    const findProduct = () =>
        fetch(`https://www.omdbapi.com/?s=batman&apikey=73e6a391`).then(res=>res.json())
            .then(results=>setResults(results.Search))
    useEffect(findProduct,[]);
    return (
        <>
            <div  className="row mt-2">
                {
                    results.map(result =>
                        <div key={result.imdbID} className="col-3 ">
                            <Link to={`/details/${result.imdbID}`}>
                                <img src = {result.Poster} height={100} className="img-fluid product-display-img"/>
                                {/*{result.Poster}*/}
                                <br/>
                                <h5>
                                    {result.Title}
                                </h5>
                            </Link>
                        </div>)
                }
            </div>


        </>
    )

}
export default DisplayTemplate
