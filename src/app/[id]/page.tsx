"use client";
import { GetMovieDetails, GetMovieVideo } from "@/api/getMovies";
import { convertToRuntime } from "@/utils/runtime";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default async function MoviePage() {
  const router = useRouter();
  let id = router.query.slug;
  let movie = await GetMovieDetails(id);
  let video = await GetMovieVideo(id);
  return (
    <section>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="left">
        <div className="info">
          <h2>{movie.title}</h2>
          <span>{movie.release_date}</span>
          <span>PG-13</span>
          <span>{convertToRuntime(movie.runtime)}</span>
          {movie.genres.map((genre: any) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
        <div className="desc">{movie.overview}</div>
        <p>director:</p>
        <p>writers:</p>
        <p>stars:</p>
        <button>top rated movies #65</button>
      </div>
      <div className="right">
        <span>8.5/350k</span>
        <button>see showcase</button>
        <button>more watch options</button>
        <Image src="" alt="" />
      </div>
    </section>
  );
}
