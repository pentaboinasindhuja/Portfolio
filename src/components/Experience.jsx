import React from 'react'
import html2 from "../../public/portfolio_images/html2.png";
import css from "../../public/portfolio_images/css.png";
import js1 from "../../public/portfolio_images/js1.jfif";
import react1 from "../../public/portfolio_images/react1.png";
import node1 from "../../public/portfolio_images/node1.png";
import express1 from "../../public/portfolio_images/express1.png";
import mangodb from "../../public/portfolio_images/mangodb.jfif";
import npm from "../../public/portfolio_images/npm.png";
import github from "../../public/portfolio_images/github.jfif";
import cpp from "../../public/portfolio_images/cpp.jpg";
function Experience() {
    const cardItem=[
          {
            id:1,
            Logo:cpp,
            name:"CPP"
          },
          {
            id:2,
            Logo:html2,
            name:"HTML"
          },
          {
            id:3,
            Logo:css,
            name:"CSS"
          },
          {
            id:4,
            Logo:js1,
            name:"Javascript"
          },
          {
            id:5,
            Logo:react1,
            name:"ReactJs"
          },
          {
            id:6,
            Logo:node1,
            name:"nodeJs"
          },
          {
            id:7,
            Logo:express1,
            name:"Express"
          },
          {
            id:8,
            Logo:mangodb,
            name:"mangoDB"
          },
          {
            id:9,
            Logo:github,
            name:"GitHub"
          },
          {
            id:10,
            Logo:npm,
            name:"npm"
          },
    ]
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
      <h1 className="text-3xl font-bold mb-5">Experience</h1>
      <p className="mb-4">I am proficient in the following skills</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
        {
            cardItem.map(({id,Logo,name})=>(
             <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] ms:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                <img src={Logo} className="w-[150px]  rounded-full " alt="" />
                <div>
                    <div className="">{name}</div>
                    
                    </div>
                   
                </div>
                
            ))
        }
      
      </div>
    </div>
    </div>
  )
}

export default Experience
