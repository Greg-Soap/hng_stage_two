import Image from "next/image";
import React from "react";
import logo from "../assets/tv.svg";
import menu from "../assets/Menu.svg";
import search from "../assets/Search.svg";
export default function Navbar() {
  return (
    <nav className="navbar_container">
      <div className="brand_logo">
        <Image width={50} height={50} src={logo} alt="Brand Logo" />
        <h1>MovieBox</h1>
      </div>
      <div className="search_component">
        <Image src={search} alt="search" width={20} height={20} />
      </div>
      <div className="auth">
        <h1>Sign in</h1>
        <Image width={36} height={36} src={menu} alt="menu" />
      </div>
    </nav>
  );
}
