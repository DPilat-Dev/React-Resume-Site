import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="relative">
      <div className="wrapper">
      <NavBar/>
        <div id="hero">
          <Hero />
        </div>
        <div  id="about" className="relative bg-primary">
          <AboutMe />
        </div>
        <div id="experience" className="relative bg-primary">
          <Experience />
        </div>
        <div id="contact" className='relative bg-primary'>
            <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
