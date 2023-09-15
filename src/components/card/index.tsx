import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import imdbImg from "@/assets/imdb.svg";
import tomatoes from "@/assets/tomatoes.png";

interface CardProps {
  title: string;
  id: string;
  image: string;
  year: string;
  country: string;
  genres: string[];
  imdb: string;
  rottenTomatoes: string;
}
export default function Card({
  title,
  id,
  image,
  year,
  country,
  imdb,
  genres,
  rottenTomatoes,
}: CardProps) {
  return (
    <article className={style.container}>
      <img
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt={title}
        style={{ width: "250px", height: "370px" }}
      />
      <p className={style.location}>
        {country}, <span className={style.year}>{year}</span>
      </p>
      <Link href={`/${id}`} className={style.title}>
        {title}
      </Link>
      <div className={style.ratings}>
        <span>
          <Image src={imdbImg} alt="iMDb" width={35} height={17} />
          {imdb}
        </span>
        <span>
          <Image src={tomatoes} alt="rotten tomatoes" width={17} height={17} />
          {rottenTomatoes}
        </span>
      </div>
      <div className={style.genres}>
        {genres.map((genre: any) => (
          <span className={style.genre} key={genre.id}>
            {genre},
          </span>
        ))}
      </div>
    </article>
  );
}
