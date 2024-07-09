import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
//import Portfolio from "./components/Portfolio";
//import Experience from './components/Experience';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import { Toaster } from "react-hot-toast";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <>
    <div>
    <Navbar />
     <Home />
     <About />
     <Projects />
     {/* <Portfolio /> */}
     {/* <Experience /> */}
     <Skills />
     <Contact />
     <Footer />
    </div>
    {/* <Toaster /> */}
    </>
  )
}

export default App
