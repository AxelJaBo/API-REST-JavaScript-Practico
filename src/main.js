const URL = 'https://api.themoviedb.org/3/';
const API_KEY = "3986d115ade1ea3de2a8564c62071a38";
const api = axios.create({
    baseURL: URL,
    Headers:{
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

async function getTrendingMovesPreview(){
    const {data} = await api('trending/movie/day');
    const movies = data.results;
    trendingMoviesPreviewList.innerHTML = "";
    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.tittle);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300'+movie.poster_path);
        
        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
    });
    console.log({data, movies});
}

async function getCategoriesPreview(){
    const {data} = await api('genre/movie/list');
    const categories = data.genres;
    categoriesPreviewList.innerHTML = "";
    categories.forEach(category => {   
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id'+category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewList.appendChild(categoryContainer);
    });
    console.log({data, categories});
}
// getTrendingMovesPreview();
// getCategoriesPreview();