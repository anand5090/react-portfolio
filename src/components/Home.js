import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'


function Home() {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg  mx-auto flex  flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full mt-1">
          
            <h2 className="text-2xl sm:text-7xl sm:flex-col text-white font-bold">
              I'm a Full Stack Developer
            </h2>
            <p className=" text-gray-500 max-w-md p-2">
              I'm a versatile full-stack developer with expertise in both
              front-end and back-end technologies. My passion lies in crafting
              seamless user experiences through responsive designs and robust
              functionality. 
            </p>
          
          <div>
            <Link to="portfolio"
            smooth
            duration={500}
            className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className=" group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={30} className=" ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-3xl mx-auto md:w-full h-72 ml-12"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
