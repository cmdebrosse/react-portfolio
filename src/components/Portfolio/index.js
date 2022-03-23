import React from "react";
import noteTaker from "../../assets/express-note-taker.png";
import portGenerator from "../../assets/portfolio-html-generator.png";
import pwGenerator from "../../assets/password-generator.png";
import workdayScheduler from "../../assets/work-day-scheduler.png";

function Gallery(props) {
  return (
    <section>
      <h1>Express Note Taker</h1>
      <img
        src={noteTaker}
        alt="Screenshot of Express Note Taker homepage"
      ></img>
      <p>A personal note taking application developed with express.js</p>

      <h1>Portfolio HTML Generator</h1>
      <img
        src={portGenerator}
        alt="Screenshot of Portfolio HTML Generator homepage"
      ></img>
      <p>Develop a personal portfolio by answering prompts in a CLI</p>

      <h1>Express Note Taker</h1>
      <img
        src={pwGenerator}
        alt="Screenshot of Password Generator homepage"
      ></img>
      <p>
        Automatically generate a secure password based on specified criteria
      </p>

      <h1>Work Day Scheduler</h1>
      <img
        src={workdayScheduler}
        alt="Screenshot of Work Day Scheduler homepage"
      ></img>
      <p>Plan a workday with the help of this app</p>
    </section>
  );
}

export default Gallery;
