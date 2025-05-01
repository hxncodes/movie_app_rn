export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_API_READ_ACCESS_TOKEN,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_READ_ACCESS_TOKEN}`,
  },
};


export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
    `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.headers,
  })
  if (!response.ok) {
    // @ts-ignore
    throw new Error('Failed to fetch movies', response.statusText);
  }
  const data = await response.json();
  return data.results;
}
const url = "keyword/{keyword_id}/movie";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer EXPO_PUBLIC_API_READ_ACCESS_TOKEN",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));
