import React, { useState, useEffect } from 'react'
import './Banner.css';

import axios from './axios';
import requests from './Request';

const Banner = () => {
    const[movie, setMovie] = useState([]);

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

    console.log("Banner Movie",movie?.backdrop_path);


    function truncate(string, n){
        return string?.length > n ? string.substring(0, n-1) + "...." : string;
    }
    return (
        <header className="banner" style={{  
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>

            <div className="banner__contents">
              <h1 className="banner__title">{movie?.name || movie?.original_name || movie?.title }</h1>
               <div className="banner__buttons">
                   <button className="banner__button">Play</button>
                   <button className="banner__button">My List</button>
               </div>
               <h1 className="banner__description">
                {
                 truncate(movie?.overview,150)
                }
               </h1>
            </div>

            <div className="banner--fadeBottom"/>
        </header>
    )
}
export default Banner

