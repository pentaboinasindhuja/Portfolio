import React from 'react'
import placement2 from "../../public/portfolio_images/placement2.jpg";
import xpressvisa from "../../public/portfolio_images/xpressvisa.jfif";
function Projects() {
    // const cardItem=[
    //       {
    //         id:1,
    //         Logo:durgadevi,
    //         name:"durgadevi"
    //       },
    //       {
    //         id:2,
    //         Logo:china,
    //         name:"china"
    //       },
          
    // ]
  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
       
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      
      <div className="grid grid-cols-1 space-y-5 md:grid-cols-2   md:space-y-0 my-10 ">
      
             <div className="md:w-[400px] md:h-[500px] border-[2px]  rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300" >
              <div className="mx-24  mt-5 mb-5">
                <img src={placement2} className="w-[160px] h-[160px] p-1  rounded-full border-[2px]" alt="" />
                </div>
                <div>
                    <div className="px-1 font-bold text-xl mb-2">Placement Portal</div>
                    <p className="px-1 text-gray-700">Developed a placement portal for RGUKT Basar to assist students in campus placement preparation, featuring placed students' feedback, interview questions, and job descriptions for various companies. This resource helps students better understand and prepare for their upcoming placements.</p>
                    </div>
                    <div className="px-1 py-4 space-x-3 justfy-around">
                    <a href="https://github.com/pentaboinasindhuja/Placement-Particulars-Portal"><button className="bg-blue-700 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded type=submit">Source</button></a>
                        <a href="https://rgu.000.pe/placement"><button className="bg-green-700 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded ">Demo</button></a>
                    </div>
                </div>
                {/* <div className="md:w-[400px] md:h-[500px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300" >
                <div className="mx-24  mt-5 mb-5">
                <img src={xpressvisa} className="w-[160px] h-[160px] p-1 rounded-full border-[2px]" alt="" />
                </div>
                <div>
                    <div className="px-1 font-bold text-xl mb-2">project1</div>
                    <p className="px-1 text-gray-700">The RGUKT Placement Portal Basar is designed to be ansite Which helps for Students in the Placement Preparation.A </p>
                    </div>
                    <div className="px-1 py-4 space-x-3 justfy-around">
                        <a href="https://github.com/pentaboinasindhuja/XPress-Visa"><button className="bg-blue-700 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded ">Source</button></a>
                        <a href="https://github.com/pentaboinasindhuja/XPress-Visa"><button className="bg-green-700 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded ">Demo</button></a>
                    </div>
                </div> */}

<div className="md:w-[400px] md:h-[500px] border-[2px]  rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 " >
              <div className="mx-24  mt-5 mb-5">
                <img src={xpressvisa} className="w-[160px] h-[160px] p-1  rounded-full border-[2px]" alt="" />
                </div>
                <div>
                    <div className="px-1 font-bold text-xl mb-2">XpressVisa</div>
                    <p className="px-1 text-gray-700">XpressVisa is a comprehensive website offering detailed information about abroad education consultancy. It provides guidance on universities, courses, visa processes, and scholarship opportunities. The platform aims to assist students in making informed decisions about their education abroad.</p>
                    </div>
                    <div className="px-1 py-4 space-x-3 justfy-around">
                    <a href="https://github.com/pentaboinasindhuja/XPress-Visa"><button className="bg-blue-700 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded type=submit">Source</button></a>
                        <a href="https://github.com/pentaboinasindhuja/XPress-Visa"><button className="bg-green-700 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded ">Demo</button></a>
                    </div>
                </div>
            
      </div>
    </div>
    
  )
}

export default Projects
