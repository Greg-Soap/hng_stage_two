"use client";
import Card from "@/components/card";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/context/Search";
import { GetMovies } from "@/api/getMovies";

export default function Movies() {
  const { search } = useContext(SearchContext);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const fetchedMovies = await GetMovies();
        setMovies(fetchedMovies.slice(0, 12));
        setIsLoading(false);
        console.log(fetchedMovies);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching movies:", error);
        return <h2>Error fetching Movies</h2>;
      }
    }

    fetchMovies();
  }, []);
  return (
    <section className="movies__section">
      <div className="top">
        <h2>Featured Movies</h2>
        <span>
          See more <Image alt="arrow" src="" width={20} height={20} />
        </span>
      </div>
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
              genre={data.genre_ids || ""}
              imdb={data.vote_average || 0}
              rottenTomatoes={data.popularity || ""}
            />
          );
        })}
      </div>
    </section>
  );
}
