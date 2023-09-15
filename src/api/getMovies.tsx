"use client";
import { headers } from "@/utils/fetchHeaders";
export const GetMovies = async () => {
  const url = "https://api.themoviedb.org/3/movie/top_rated";
  const response = await fetch(url, { headers });
  const data = await response.json();
  const movies = data.results;
  if (movies) {
    return movies;
  } else {
    throw new Error("Error fetching Movies");
  }
};

export const GetSearchedMovies = async (search: string) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=`;
  const response = await fetch(url, { headers });
  const data = await response.json();
  const searchedMovies = data.results;
  if (searchedMovies) {
    return searchedMovies;
  } else {
    throw new Error("Error Searching...");
  }
};

export const GetMovieDetails = async (id?: string | string[]) => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const response = await fetch(url, { headers });
  const Movie = await response.json();
  if (Movie) {
    return Movie;
  } else {
    throw new Error("Error fetching Movies");
  }
};

export const GetMovieVideo = async (id?: string | string[]) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos`;
  const response = await fetch(url, { headers });
  const Movie = await response.json();
  const videos = Movie?.results;
  const trailers = videos.filter((video: any) => video.type === "Trailer");
  if (trailers.length > 0) {
    const firstTrailer = trailers[0];
    const youtubeVideoId = firstTrailer.key;
    return youtubeVideoId;
  } else {
    throw new Error("No trailer found for this movie.");
  }
};

export const GetGenres = async () => {
  try {
    const url = "https://api.themoviedb.org/3/genre/movie/list";
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error("Error fetching genre data", error);
    return [];
  }
};
