const API_KEY = "50f8ae46be423784c945b84e5d2c42ad";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,

    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,

    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,

    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=1074`,

    }, 
    {
        name: "romances",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,

    }
];

export const getMovies = async (path) => {
    let url = `https://api.themoviedb.org/3/${path}`;
    try {
        
    } catch (error) {
        console.log("error getMovies:", error);
        
    }
}