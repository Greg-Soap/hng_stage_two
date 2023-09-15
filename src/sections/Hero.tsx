import Image from "next/image";
import React from "react";
import imdb from "../assets/imdb.svg";
import tomatoes from "../assets/tomatoes.png";
import play from "../assets/Play.svg";
export default function Hero() {
  return (
    <section className="hero_container">
      <div className="hero_wrapper">
        <div className="hero_content">
          <div className="title">John Wick 3 : Parabellum</div>
          <div className="ratings">
            <span>
              <Image src={imdb} alt="iMDb" width={35} height={17} />
              86.0 / 100
            </span>
            <span>
              <Image
                src={tomatoes}
                alt="rotten tomatoes"
                width={17}
                height={17}
              />
              97%
            </span>
          </div>
          <div className="hero_desc">
            John Wick is on the run after killing a member of the international
            assassins guild, and with a $14 million price tag on his head, he is
            the target of hit men and women everywhere.
          </div>
          <button className="hero_btn">
            <Image src={play} alt="play" width={20} height={20} /> watch trailer
          </button>
        </div>
      </div>
    </section>
  );
}
