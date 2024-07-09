import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa6';
//import { FcLike } from "react-icons/fc";
import { GoHeartFill } from "react-icons/go";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
   <>
  <hr />
  <footer className="my-12">
  <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
    <div className="flex flex-col items-center">
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/pentaboina-sindhuja-19a26024a/"><FaLinkedinIn size={24} /></a>
        <a href="mailto:pentaboinasindhuja17@gmail.com">< MdEmail size={24} /></a>
        <a href="https://github.com/pentaboinasindhuja"><ImGithub  size={24} /></a>
        <a href="https://leetcode.com/u/b191367/"><SiLeetcode size={24} />  </a>
    </div>
    <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
        <p className="text-sm">
            &copy; 2024 Sindhuja Pentaboina . All rights reserved. 
        </p>
        <p className="text-sm flex items-center">Made by Sindhuja <GoHeartFill/></p>
    </div>
    </div>
    </div>
  </footer>
   </>
  )
}

export default Footer
