import React, { useState, useEffect } from 'react'
import './Banner.css';

import axios from './axios';
import requests from './Request';

import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const Banner = () => {
    const[movie, setMovie] = useState([]);
    const[trailerUrl, setTrailerUrl] = useState("");


    useEffect( ()=>{
        const fetchMovie = async () => {
            const requestOrigi = await axios.get(requests.fetchTrending);
           // console.log("Banner",requestOrigi.data.results.length);

            setMovie(requestOrigi.data.results[
                Math.floor(Math.random() * requestOrigi.data.results.length-1)
            ]);
            return requestOrigi;
        }
        fetchMovie();

    },[]); 


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
            movieTrailer(singleData || "")
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

    console.log("Banner Movie",movie?.backdrop_path);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + "...." : string;
    }
    return (
        <header className="banner" style={{  
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
    
            <div className={`banner__contents ${trailerUrl && 'fade__background' }`}>
              <h1 className="banner__title">{movie?.name || movie?.original_name || movie?.title }</h1>
               <div className="banner__buttons">
                   <button className="banner__button" onClick={()=>handleSubmit(movie?.name || movie?.original_name || movie?.title)}>Play</button>
                   <button className="banner__button">My List</button>
               </div>
              
               <h1 className="banner__description">
                {
                 truncate(movie?.overview,150)
                }
               </h1>
              
            </div>

           
            {trailerUrl && <YouTube className="mx-auto d-block align-items-start justify-content-center w-50" style={{paddingTop: '-500px'}} videoId={trailerUrl} opts={opts}/>}
            <div className="banner--fadeBottom"/>
        </header>
    )
}
export default Banner

