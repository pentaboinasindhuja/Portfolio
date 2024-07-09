import React from 'react'
import { FaLinkedin } from "react-icons/fa";
//import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
//import { FaTwitter } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { ReactTyped} from "react-typed";
import home from "../../public/portfolio_images/home.gif";
const Home = () => {
  return (
   <>
   <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mb:0">
    <div className="flex flex-col md:flex-row">
    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
    
    <span className="text-3xl text-red-600">Hello!</span>
    <br />
    <br />
    <span className="text-3xl text-red-600">I'M SINDHUJA</span>
    <br />
    <br />
    <div className="flex space-x-1 text-2xl md:text-2xl">
    <h1></h1>
    {/* <span className="text-red-700 font-bold">Developer</span> */}
    <ReactTyped
          className="text-brown-600 font-bold"
          strings={["Web Developer","Programmer","Creative Thinker"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
    </div>
    <br />
    <p className="text-sm md:text-md text-justify">I am a full-stack developer with  proficiency in communication and data structures & algorithms. Here is my portfolio to know more about me.</p>
    <br />
   
    <div className="space-y-2  items-center md:space-y-2">
        <h1 className="font-bold mb-3">Available On</h1>
          <ul className="flex space-x-6 ">
            <li>
               <a href="https://www.linkedin.com/in/pentaboina-sindhuja-19a26024a/">
        <FaLinkedin className="text-xl cursor-pointer"/>
        </a>
        </li>
        <li>
           <a  href="https://github.com/pentaboinasindhuja">
        <  ImGithub className="text-xl cursor-pointer"/>
        </a>
        </li>
        <li>
            <a href="mailto:pentaboinasindhuja17@gmail.com">
        <SiGmail className="text-xl cursor-pointer"/>
        </a>
        </li>
        </ul>
    </div>
    </div>
    <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
    <img 
    className="rounded-full w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
    src={home} alt="" />
    </div>
    </div>
   </div>
   <hr />
   </>
  )
}

export default Home
