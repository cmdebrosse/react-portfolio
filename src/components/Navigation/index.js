import React from "react";

function Nav() {
  return (
    <header>
      <nav>
        <h2>Charles (Chuck) DeBrosse</h2>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
            <a href="#portfolio">My Projects</a>
            <a href="#contact">Contact Me</a>
            <a href="#resume">My Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
