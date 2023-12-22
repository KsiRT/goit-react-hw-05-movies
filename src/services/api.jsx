import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const ACCESS_KEY = 'fde4dd89a2c817f4c4efb19732e7d4a1';
const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w500';

export const fetchPopMovies = async () => {
  const {
    data: { results },
  } = await axios.get('trending/movie/day', {
    params: {
      api_key: ACCESS_KEY,
    },
  });
  return extractMoviesData(results);
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: ACCESS_KEY,
    },
  });
  const { title, overview, poster_path, vote_average, genres } = data;

  return {
    title,
    overview,
    poster: poster_path ? IMG_BASE_URL + poster_path : null,
    score: Math.floor(vote_average * 10),
    genres,
  };
};

export async function fetchReviews(id) {
  const { data } = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: ACCESS_KEY,
    },
  });

  return data?.results;
}

export const fetchCast = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: ACCESS_KEY,
    },
  });
  console.log(data);
  return data?.cast.map(({ profile_path, name, character, id }) => ({
    id,
    photo: profile_path ? IMG_BASE_URL + profile_path : null,
    name,
    character,
  }));
};

export async function fetchMoviesByQuery(query) {
  const { data } = await axios.get('search/movie', {
    params: {
      api_key: ACCESS_KEY,
      query: query,
    },
  });
  return extractMoviesData(data.results);
}

function extractMoviesData(movies) {
  const result = movies.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster: poster_path ? IMG_BASE_URL + poster_path : null,
  }));
  // console.log(result);
  return result;
}
