import Image from "next/image";
import React from "react";

export default function MoviePage() {
  return (
    <section>
      <div className="video"></div>
      <div className="left">
        <div className="info">
          <h2>top gun maverick.</h2>
          <span>2022</span>
          <span>PG-13</span>
          <span>2h 10m</span>
          <span>Actions Drama</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          laborum mollitia amet blanditiis similique dolore excepturi aut
          eligendi, explicabo veniam?
        </div>
        <p>director:</p>
        <p>writers:</p>
        <p>stars:</p>
        <button>top rated movies #65</button>
        <select name="" id=""></select>
      </div>
      <div className="right">
        <span>star/350k</span>
        <button>see showcase</button>
        <button>more watch options</button>
        <Image src="" alt="" />
      </div>
    </section>
  );
}
