import React,{ useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';

import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL = "https://image.tmdb.org/t/p/original";

const Row = ({title, fetchUrl, isLargeRow=false}) => {
    const[movie, setMovie] = useState([]);
    const[trailerUrl, setTrailerUrl] = useState("");

    useEffect( () => {
        const fetchMovie = async () => {
            const requestOrigi = await axios.get(fetchUrl);
             console.log("Row",requestOrigi.data.results);

            setMovie(requestOrigi.data.results);
            return requestOrigi;
        }
        fetchMovie();

    },[fetchUrl]); 

    const opts = {
        height: '390',
        width: '640',
        alignItems: 'center',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleSubmit = (singleData) => {
        if(trailerUrl) {
            setTrailerUrl("");
        }
        else {
            movieTrailer(singleData?.name || singleData?.title || singleData?.original_name || "")
            .then( url => {
                console.log("Youtube URL : "+url);
                //https://www.youtube.com/watch?v=KnBwHYAnbEw
               // https://www.youtube.com/results?search_query=sweet+tooth
                const urlParams =  new URLSearchParams(new URL(url).search);
                setTrailerUrl((urlParams.get("v") || urlParams.get("query")));
            })
            .catch( error => console.log(error));
        }
    }

    console.log("Row Movie",movie);

    return (
        <div className="row1"> 
         <h2 className="text-light">{title}</h2>
            <div className="row__postersMain"  >
               {
                movie.map( (singleData) => (
                    (isLargeRow && singleData.poster_path) ||
                    (!isLargeRow && singleData.backdrop_path)) && 
                      (
                        <img 
                        onClick={()=>handleSubmit(singleData)}
                        key={singleData.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge" }`} 
                        src={`${baseURL}${ isLargeRow ? singleData.poster_path : singleData.backdrop_path}`} 
                        alt={singleData.title} />
                      )   
                )
               }
            </div>
            
             {trailerUrl && <YouTube className="mx-auto d-block w-100" videoId={trailerUrl} opts={opts}/>}  
        </div>
    )
}

export default Row

