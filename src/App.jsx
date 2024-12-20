import { Toaster } from "react-hot-toast";
import Articles from "./sections/Articles/Articles";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar/Navbar";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Articles />
      <Contact />
      <Toaster />
    </>
  );
}

export default App;
