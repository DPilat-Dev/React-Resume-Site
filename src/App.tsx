import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
//import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="relative">
      <div className="wrapper">
        <div id="hero">
          <Hero />
        </div>
        <div  id="about" className="relative bg-primary">
          <AboutMe />
        </div>
        <div id="experience" className="relative bg-primary">
          <Experience />
        </div>
        {/*<div id="portfolio" className='relative bg-primary'>
            <Portfolio />
        </div>*/}
        <div id="contact" className='relative bg-primary'>
            <Contact />
        </div>
        <div id="contact" className='relative bg-primary'>
            <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
