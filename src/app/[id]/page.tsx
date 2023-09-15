"use client";
import { GetMovieDetails, GetMovieVideo } from "@/api/getMovies";
import Sidebar from "@/components/sidebar";
import { convertToRuntime } from "@/utils/runtime";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import style from "./page.module.css";
import tickets from "@/assets/Two Tickets.svg";
import list from "@/assets/List.svg";
export default async function MoviePage() {
  const pathname = usePathname();
  let id = pathname.split("/")[1];
  let movie = await GetMovieDetails(id);
  let video = await GetMovieVideo(id);
  return (
    <main className={style.container}>
      <Sidebar />
      <section className={style.details}>
        <div className={style.video}>
          <iframe
            height="450px"
            src={`https://www.youtube.com/embed/${video}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={style.bottom}>
          <div className={style.left}>
            <div className={style.info}>
              <h2>{movie.title}</h2>
              <p>.</p>
              <span>{movie.release_date}</span>
              <p>.</p>
              <span>PG-13</span>
              <p>.</p>
              <span>{convertToRuntime(movie.runtime)}</span>
              {movie.genres.map((genre: any) => (
                <span className={style.genre} key={genre.id}>
                  {genre.name}
                </span>
              ))}
            </div>
            <div className={style.desc}>{movie.overview}</div>
          </div>
          <div className={style.right}>
            <button>
              <Image src={tickets} alt="extra" width={25} height={25} />
              see showcase
            </button>
            <button className={style.btn}>
              {" "}
              <Image src={list} alt="extra" width={25} height={25} />
              more watch options
            </button>
            <Image
              src="/Rectangle 37.png"
              alt="extra"
              width={360}
              height={229}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
