import React,{ useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';

const baseURL = "https://image.tmdb.org/t/p/original";

const Row = ({title, fetchUrl, isLargeRow=false}) => {
    const[movie, setMovie] = useState([]);
    
    useEffect( ()=>{
        const fetchMovie = async () => {
            const requestOrigi = await axios.get(fetchUrl);
             console.log("Row",requestOrigi.data.results);

            setMovie(requestOrigi.data.results);
            return requestOrigi;
        }
        fetchMovie();

    },[fetchUrl]); 

    console.log("Row Movie",movie);

    return (
        <div className="row"> 
         <h2 className="text-light">{title}</h2>
            <div className="row__postersMain" style={{position:'relative'}} >
               {
                movie?.map( singleData =>
                    <img 
                    key={singleData.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge" }`} 
                    src={`${baseURL}${ isLargeRow ? singleData.poster_path : singleData.backdrop_path}`} 
                    alt={singleData.title} style={{width:'245px',height:'300px'}}/>
                )
               }
            </div>
        </div>
    )
}

export default Row

