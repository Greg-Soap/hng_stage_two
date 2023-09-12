import Card from "@/components/card";
import Image from "next/image";
import React from "react";

export default function Movies() {
  const dummyData = [
    {
      id: 1,
      title: "batman",
      year: "2021",
      country: "usa",
      imdb: "8.8",
      rottenTomatoes: "78%",
      image: "",
      genre: ["action"],
    },
  ];
  return (
    <section className="movies__section">
      <div className="top">
        <h2>Featured Movies</h2>
        <span>
          See more <Image alt="arrow" src="" width={20} height={20} />
        </span>
      </div>
      <div className="movies__container">
        {dummyData.map((data) => {
          return (
            <Card
              title={data.title}
              key={data.id}
              year={data.year}
              country={data.country}
              image={data.image}
              genre={data.genre}
              imdb={data.imdb}
              rottenTomatoes={data.rottenTomatoes}
            />
          );
        })}
      </div>
    </section>
  );
}
