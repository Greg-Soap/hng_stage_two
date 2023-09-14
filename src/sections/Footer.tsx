import Image from "next/image";
import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        <div className="social_links">
          <Image src={facebook} alt="facebook" width={24} height={24} />
          <Image src={instagram} alt="instagram" width={24} height={24} />
          <Image src={twitter} alt="twitter" width={24} height={24} />
          <Image src={youtube} alt="youtube" width={24} height={24} />
        </div>
        <div className="links">
          <a href="#" className="link">
            Conditions of Use
          </a>
          <a href="#" className="link">
            Privacy & Policy
          </a>
          <a href="#" className="link">
            Press Room
          </a>
        </div>
        <div className="copyright">
          © 2021 MovieBox by Adriana Eka Prayudha{" "}
        </div>
      </div>
    </footer>
  );
}
