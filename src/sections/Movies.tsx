"use client";
import Card from "@/components/card";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/context/Search";
import { GetGenres, GetMovies } from "@/api/getMovies";
import arrow from "@/assets/Chevron right.svg";
import Loading from "@/app/loading";

export default function Movies() {
  const { search } = useContext(SearchContext);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchMovies() {
      const fetchedMovies = await GetMovies();
      setMovies(fetchedMovies.slice(0, 12));
      setIsLoading(false);
    }
    async function fetchGenres() {
      const fetchedGenres = await GetGenres();
      setGenres(fetchedGenres);
    }

    fetchMovies();
    fetchGenres();
  }, []);
  function getGenreNames(genreIds: any) {
    const genreNames = genreIds.map((genreId: any) => {
      //@ts-ignore
      const genre = genres.find((genre) => genre.id === genreId);
      //@ts-ignore
      return genre ? genre.name : "";
    });
    return genreNames;
  }
  return (
    <section className="movies__section">
      <div className="top">
        <h2>Featured Movies</h2>
        <span>
          See more <Image alt="arrow" src={arrow} width={20} height={20} />
        </span>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="movies__container">
          {movies.map((data: any) => {
            return (
              <Card
                id={data.id}
                title={data.title || ""}
                key={data.id || ""}
                year={data.release_date || ""}
                country={data.country || "USA"}
                image={data.poster_path || ""}
                genres={getGenreNames(data.genre_ids)}
                imdb={data.vote_average || 0}
                rottenTomatoes={data.popularity || ""}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
