import Image from "next/image";
import React from "react";
import logo from "@/assets/tv.svg";
import style from "./sidebar.module.css";
import icon1 from "@/assets/Calendar.svg";
import icon2 from "@/assets/Home.svg";
import icon3 from "@/assets/Movie Projector.svg";
import icon4 from "@/assets/TV Show.svg";
import logout from "@/assets/Logout.svg";

export default function Sidebar() {
  const SidebarLinks = [
    { id: 1, name: "Home", slug: "/", icon: icon2 },
    { id: 2, name: "Movies", slug: "/movies/:id", icon: icon3 },
    { id: 3, name: "TV Series", slug: "/", icon: icon4 },
    { id: 4, name: "Upcoming", slug: "/", icon: icon1 },
  ];
  return (
    <aside className={style.container}>
      <div className={style.brand_logo}>
        <Image width={50} height={50} src={logo} alt="Brand Logo" />
        <h1>MovieBox</h1>
      </div>
      <div className={style.sidebar_links}>
        {SidebarLinks.map((link) => {
          return (
            <a href={link.slug} className={style.link} key={link.id}>
              <Image src={link.icon} alt={link.name} width={25} height={25} />
              {link.name}
            </a>
          );
        })}
      </div>
      <div className={style.ad}>
        <h2 className="title">play movie quizzes and earn free tickets</h2>
        <p>50k people are playing now</p>
        <button>start playing</button>
      </div>
      <a href="/" className={style.logout}>
        <Image src={logout} alt="logout" width={25} height={25} />
        Log Out
      </a>
    </aside>
  );
}
