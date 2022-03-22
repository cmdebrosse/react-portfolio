import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Navigation";
import Gallery from "./components/Portfolio";
import ContactForm from "./components/Contact";
import "./App.css";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <About></About>
        <Gallery></Gallery>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
