const URL = 'https://api.themoviedb.org/3/trending/movie/day';
const API_KEY = "3986d115ade1ea3de2a8564c62071a38";

async function getTrendingMovesPreview(){
    const res = await fetch(URL+'?api_key='+API_KEY);
    const data = await res.json();

    const movies = data.results;
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
        
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.tittle);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300'+movie.poster_path);
        
        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
    console.log({data, movies});
}
getTrendingMovesPreview();