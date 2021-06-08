import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;


{/*7d161198e8f9b89da5beb6851bbeda63*/}

// //https://api.themoviedb.org/3/ trending/all/week?api_key=7d161198e8f9b89da5beb6851bbeda63&language=en-US
