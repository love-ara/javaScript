//https://api.themoviedb.org/3/movie/157336?api_key=5ee8f27402aa22b8b96429569b263e47
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
const API_KEY = "api_key=717ccf6765dcaa577801cadcc372f394";
const API_URL = "https://api.themoviedb.org/3"
const MOVIE_URL = `${API_URL}/movie/popular?${API_KEY}`;
const SEARCH_URL = `${API_URL}/search/movie?${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

console.log(MOVIE_URL)


const getMovies = (url) => {
    fetch(url)
    .then((response)=> response.json()
    .then((data) => {
        console.log(data);
        showMovies(data.results);
    })
    .catch((error)=> console.log(error))
)}

getMovies(MOVIE_URL);

const movieContainer = document.querySelector(".movieContainer");

const showMovies = (movies) => {
    movieContainer.innerHTML = '';
    movies.forEach(movie => {
        const {title, overview, poster_path, vote_average, image} = movie;
        const divTag = document.createElement("div");
        divTag.classList.add("movieDetails");
        divTag.innerHTML = `
        <img src= ${IMAGE_URL}${poster_path} alt="poster">
        <div id="movieTitle">
            <p><b>${title}</b></p>
            <p>${vote_average}</p>
        </div>
    
    <h2>Overwiew</h2>
    <p>
      ${overview}
    </p>`;
    movieContainer.appendChild(divTag);
    });
}


const searchMovie = (API_URL) => {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            showMovies(data.results);
        })
        .catch(error => console.log(error));
};



const form = document.querySelector(".search")
const search = document.querySelector("#user-input")


form.addEventListener("keyup", (event) => {
    event.preventDefault();
    const searchValue = search.value
    if(searchValue){
        getMovies(SEARCH_URL + "&query=" + searchValue)
    }else{
        getMovies(MOVIE_URL)
    }
})










  

  