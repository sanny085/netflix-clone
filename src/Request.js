const API_KEY = "7d161198e8f9b89da5beb6851bbeda63";

const request = ({
   fetchTrending : `/trending/all/week?api_key=${API_KEY}/&language=en-US`,
   fetchNetflixOriginal : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
});