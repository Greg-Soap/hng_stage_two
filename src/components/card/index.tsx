import Image from "next/image";
import React from "react";
import style from "./card.module.css";

interface CardProps {
  title: string;
  image: string;
  year: string;
  country: string;
  genre: string[];
  imdb: string;
  rottenTomatoes: string;
}
export default function Card({
  title,
  image,
  year,
  country,
  imdb,
  rottenTomatoes,
}: CardProps) {
  return (
    <article className={style.container}>
      <Image src={image} alt={title} width={250} height={370} />
      <p className={style.location}>
        {country} <span className={style.year}>{year}</span>
      </p>
      <h2 className={style.title}>{title}</h2>
      <div className={style.ratings}>
        <span>
          <Image src="" alt="iMDb" width={35} height={17} />
          {imdb}
        </span>
        <span>
          <Image src="" alt="rotten tomatoes" width={17} height={17} />
          {rottenTomatoes}
        </span>
      </div>
    </article>
  );
}
