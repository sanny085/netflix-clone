const API_KEY = "7d161198e8f9b89da5beb6851bbeda63";

const requests = {
   fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,// Main banner
   fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`, 
   fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchScienceFrictionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=878`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};
 
export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=7d161198e8f9b89da5beb6851bbeda63&language=en-US
