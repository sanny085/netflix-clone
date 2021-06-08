import React,{ useState, useEffect } from 'react'
import axios from './axios';

const Row = ({title, fetchUrl}) => {
    const[movie, setMovie] = useState([]);

    useEffect( ()=>{
        const fetchMovie = async () => {
            const requestOrigi = await axios.get(fetchUrl);
           // console.log("Banner",requestOrigi.data.results.length);

            setMovie(requestOrigi.data.results[
                Math.floor(Math.random() * requestOrigi.data.results.length-1)
            ]);
            return requestOrigi;
        }
        fetchMovie();

    },[]); 

    console.log("Row Movie",movie?.backdrop_path);


    return (
        <div> 
         <h3 className="text-light">{title}</h3>
            
        </div>
    )
}

export default Row
