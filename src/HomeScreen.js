import React from 'react'
import './HomeScreen.css'

import Nav from './Nav';
import Banner from './Banner';

import requests from './Request';
import Row from './Row';

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            {/*Nav*/}
       
             <Nav/>
            {/*Banner*/}
             <Banner/>
              
            {/*Row*/}
             <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/> 
              
             <Row title="Trending Now" fetchUrl={requests.fetchTrending}/> 
             <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/> 
             <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/> 
             <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/> 
             <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/> 
             <Row title="Science & Frictions Movies" fetchUrl={requests.fetchScienceFrictionMovies}/> 
             <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/> 
            

        </div>
    )
}

export default HomeScreen;
