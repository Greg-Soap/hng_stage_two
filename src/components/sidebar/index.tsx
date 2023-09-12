import Image from "next/image";
import React from "react";
import logo from "../assets/tv.svg";

export default function Sidebar() {
  const SidebarLinks = [
    { id: 1, name: "Home", slug: "/" },
    { id: 2, name: "Movies", slug: "/movies/:id" },
    { id: 3, name: "TV Series", slug: "/" },
    { id: 4, name: "Upcoming", slug: "/" },
  ];
  return (
    <aside>
      <div className="brand_logo">
        <Image width={50} height={50} src={logo} alt="Brand Logo" />
        <h1>MovieBox</h1>
      </div>
      <div className="sidebar_links">
        {SidebarLinks.map((link) => {
          return (
            <a href={link.slug} key={link.id}>
              {link.name}
            </a>
          );
        })}
      </div>
      <div className="ad">
        <h2 className="title">play movie quizzes and earn free tickets</h2>
        <p>50k people are playing now</p>
        <button>start playing</button>
      </div>
      <a href="/"> Log Out</a>
    </aside>
  );
}
