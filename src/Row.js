import React,{ useState, useEffect } from 'react'
import axios from './axios';

const Row = ({title, fetchUrl}) => {
    const[movie, setMovie] = useState([]);

    useEffect( ()=>{
        const fetchMovie = async () => {
            const requestOrigi = await axios.get(fetchUrl);
             console.log("Row",requestOrigi.data.results);

            setMovie(requestOrigi.data.results[
                Math.floor(Math.random() * requestOrigi.data.results.length-1)
            ]);
            return requestOrigi;
        }
        fetchMovie();

    },[]); 

    console.log("Row Movie",movie);

    return (
        <div className="row"> 
         <h2 className="text-light">{title}</h2>
            <div className="row__poster" style={{position:'relative'}} >
               {
                movie?.map((singleMovie)=>
                <img src={singleMovie?.backdrop_path} alt=""/>
                )
               }
            </div>
        </div>
    )
}

export default Row

