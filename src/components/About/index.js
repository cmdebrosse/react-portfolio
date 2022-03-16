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
      <p>
        My name is Charles DeBrosse but I have always gone by Chuck. I have an
        Associates in Computer Networking and a Bachelors in Music Ministry. My
        professional experience is mainly in the world of CNC machining. After
        almost 8 years on the job I've developed real world, hands on experience
        with the relationship between a machine and the programming that runs
        it.
        <br />
        <br />I have recently been making my way through a coding bootcamp with
        The Ohio State University, and have learned so much in a very short
        time. To this point I have covered topics such as HTML, CSS, JavaScript,
        front end and back end APIs, and frameworks including Bootstrap and
        JQuery. The challenge of troubleshooting and problem solving has been
        both exciting and rewarding. By the end of this course I hope to be a
        brand new, fullstack, industry ready developer!
      </p>
    </section>
  );
}

export default About;
