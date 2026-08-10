import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import { projectsData } from "./data";
import { skillsData } from "./data";
import circle from "./assets/circle.svg";
import "./App.css";

function App() {
  useEffect(() => {
    localStorage.setItem("myProjects", JSON.stringify(projectsData));
    localStorage.setItem("skills", JSON.stringify(skillsData));
  }, []);

  const [myProjects] = useState(
    JSON.parse(localStorage.getItem("myProjects") || "[]")
  );

  const [skills] = useState(
    JSON.parse(localStorage.getItem("skills") || "[]")
  );

  return (
    <>
      <title>MW site</title>
      <link rel="icon" type="image/svg+xml" href={circle} />

      <Header />

      <WelcomeSection />  

      <MyProjects 
        myProjects={myProjects}
      />

      <Skills 
        skills={skills}
      />

      <Contact />
    </>
  )
}

export default App