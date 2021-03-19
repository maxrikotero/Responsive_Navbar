import { useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav_links li");
    document.querySelector(".burger").addEventListener("click", () => {
      // Toggle Nav
      document.querySelector(".nav_links").classList.toggle("nav-active");

      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });

      //Burguer Animations
      document.querySelector(".burger").classList.toggle("toggle_burger");
    });
  }, []);
  return (
    <>
      <nav>
        <div className="logo">
          <h4>The Nav</h4>
        </div>
        <ul className="nav_links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}
