



export default async function FetchMovies(data,page) {
  console.log('this is the page number:',page);
    const url = `https://api.themoviedb.org/3/discover/movie?certification=${data.moviecertificate}&certification.gte=${data.moviecertificate}&certification.lte=${data.moviecertificate}&certification_country=GB&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_keywords=207317&with_runtime.lte=${data.time}&with_genres=${data.genre}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDRiNzYzNjZhOTc0ZTkwY2MwYzA3OWI5MTRjYTViMiIsIm5iZiI6MTczMzA2MTIyNi45MDUsInN1YiI6IjY3NGM2YTZhMGQ5OWI0NDM2MWUwMjQxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q6IkzeQZRHR4haJ0Kp7U4o97if53jVH7-aVDsF0Jykk'
  }
};
  try {
    console.log('function fetchMovies called');
    const response = await fetch(url, options);
    const data = await response.json();
    console.log('Movies:', data);
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; 
  }
};
