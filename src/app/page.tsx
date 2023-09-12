"use client";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/context/Search";
import { GetMovies } from "@/api/getMovies";

export default function HomePage() {
  const { search } = useContext(SearchContext);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const fetchedMovies = await GetMovies(search);
        setMovies(fetchedMovies.slice(0, 24));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.error("Error fetching movies:", error);
        return <h2>Error fetching movies</h2>;
      }
    }

    fetchMovies();
  }, [search]);
  return <main>HELLO WORLD</main>;
}
