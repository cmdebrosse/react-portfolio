import React from "react";
import profilePic from "../../assets/profilePic.jpg";

function About() {
  return (
    <section className="my-5">
      <img
        src={profilePic}
        className="my-2"
        style={{ width: "25%" }}
        alt="My headshot"
      />
    </section>
  );
}

export default About;
