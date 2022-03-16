import React from "react";

function Nav() {
  return (
    <header>
      <nav>
        <a href="/">
          <h2>Charles (Chuck) DeBrosse</h2>
        </a>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li className="mx-2">
            <a href="#portfolio">My Work</a>
          </li>
          <li className="mx-2">
            <a href="#contact">Contact Me</a>
          </li>
          <li className="mx-2">
            <a href="#resume">My Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
