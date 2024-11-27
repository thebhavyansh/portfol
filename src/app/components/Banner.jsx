import Image from "next/image";
import React from "react";
import main from "../../../public/image.png";
import "./all.css";
import Link from "next/link";
function Banner() {
  return (
    <div className="flex flex-col items-center my-5 bg-black  md:my-20 md:gap-5 gap-3 ">
      <h2 className="md:text-[55px] md:flex-row md:gap-5 flex flex-col items-center justify-center text-[30px] ft">
        <p className="sm:text-center">Hello! I'm</p> <strong className="text-[#cd9403] ">Bhavyansh Tomar</strong>
      </h2>
      <h3 className="md:text-[40px] text-[20px]">
        A <strong>Full Stack Developer</strong>
      </h3>
      <div className="">
        <Image src={main} width={180} height={180} />
      </div>
      <div className=" flex gap-5">
       <Link href="https://drive.google.com/file/d/1KE6tGCNuWSuqRCEN3GeFbBUk33IV823N/view?usp=sharing"> <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-black hover:text-[#cd9403] hover:fill-[#cd9403] bg-[#cd9403] duration-150 hover:bg-transparent  border-[#cd9403] active:bg-indigo-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path d="M17.974,7.146c-.332-.066-.603-.273-.742-.569-1.552-3.271-5.143-5.1-8.735-4.438-3.272,.6-5.837,3.212-6.384,6.501-.162,.971-.15,1.943,.033,2.89,.06,.309-.073,.653-.346,.901-1.145,1.041-1.801,2.524-1.801,4.07,0,3.032,2.467,5.5,5.5,5.5h11c4.136,0,7.5-3.364,7.5-7.5,0-3.565-2.534-6.658-6.026-7.354Zm-2.853,7.562l-2.707,2.707c-.387,.387-.896,.582-1.405,.584l-.009,.002-.009-.002c-.509-.002-1.018-.197-1.405-.584l-2.707-2.707c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.707,1.707v-5c0-.553,.448-1,1-1s1,.447,1,1v5l1.707-1.707c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Z" />
          </svg>
          Resume
        </button></Link>
       
        <button className="flex items-center gap-2 px-9 py-2 text-[#cd9403] hover:bg-[#cd9403] hover:text-black  bg-transparen rounded-full duration-150 border border-[#cd9403] active:bg-indigo-700">
          Hire me
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 my-12">
        <div className="text-[#cd9403] md:text-[45px] text-[30px] font-bold">
          About me
        </div>
        <div className="fnt border rounded-2xl text-[18px] border-transparent m-5 md:w-[900px] p-4 bg-[#2b2b2b]">
          I am a final-year Computer Science and Engineering student at the
          Rajiv Gandhi Institute of Petroleum Technology, with a strong academic
          foundation (CPI: 7.69*) and extensive experience in full-stack
          development. I specialize in building scalable, user-friendly web
          applications using technologies like React.js, Next.js, Tailwind CSS,
          and MongoDB, among others. My personal projects reflect my passion for
          innovation, ranging from AI-powered mock interview platforms to secure
          file-sharing apps and geolocation-enabled food donation platforms.
          Proficient in programming languages like C++, Python, and JavaScript,
          I thrive on solving complex challenges and creating impactful
          solutions. I'm always eager to learn, contribute, and grow as a
          skilled software developer.
        </div>
      </div>
    </div>
  );
}

export default Banner;
