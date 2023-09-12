import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section>
      <div className="title"></div>
      <div className="ratings">
        <span>
          <Image src="" alt="iMDb" width={35} height={17} />
          imdb
        </span>
        <span>
          <Image src="" alt="rotten tomatoes" width={17} height={17} />
          rotten tomatoes
        </span>
      </div>
      <div className="desc"></div>
      <button>watch trailer</button>
    </section>
  );
}
