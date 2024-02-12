import React from "react";
import { header } from "../../portfolioDetails";
import "./header.css";
import Navbar from "../NavBar/Navbar";

export default function Header() {
  const { homepage, title } = header;

  return (
    <>
      <header className="header center">
        <h3>
          {homepage ? (
            <a href={homepage} className="link">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <Navbar />
      </header>
    </>
  );
}
