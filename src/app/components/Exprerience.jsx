import React from "react";
import Image from "next/image";
import img from "../../../public/right-arrow-svgrepo-com.svg";
import "./all.css";
function Exprerience() {
  const keys = [
    {
      title:
        "Led the development of over 15 responsive web pages using Next.js and Tailwind CSS.",
    },
    {
      title:
        "Implemented PostgreSQL for efficient database management and Developed robust backend APIs using Express.js for seamless data handling.",
    },
    {
      title:
        "Integrated Chart.js and other libraries to display real-time data, enhancing interaction speed by 30%.",
    },
    {
      title:
        "Contributed significantly to the overall system architecture and deployment of full-stack applications, ensuring smooth performance across devices.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="text-[#cd9403] ft md:text-[45px] text-[30px] font-bold">
        Exprerience
      </div>
      <div className="bg-[#c3c2c3] border rounded-3xl md:w-[800px]">
        <div className=" md:justify-between md:flex-col md:items-center flex flex-col gap-2 px-8 my-5">
          <div className="border flex items-center justify-center rounded-full text-[#cd9403] md:text-[18px] bg-black px-4 py-2">
            <p>ChemDraw Consulting Pvt. Ltd.</p>
          </div>
          <div className="border rounded-full flex items-center justify-center text-black md:text-[15px] bg-[#ddd1ae]  py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="calendar"
              width="25"
              height="25"
            >
              <g fill="#134563">
                <path d="M49.6 54H14.4C12 54 10 52 10 49.6V17.3c0-2.4 1.6-4.4 3.7-4.4h2.2v2.9h-2.2c-.3 0-.7.6-.7 1.5v32.3c0 .8.7 1.5 1.5 1.5h35.2c.8 0 1.5-.7 1.5-1.5V17.3c0-.9-.5-1.5-.7-1.5h-2.2v-2.9h2.2c2 0 3.7 2 3.7 4.4v32.3C54 52 52 54 49.6 54"></path>
                <path d="M20.3 18.8c-.8 0-1.5-.7-1.5-1.5v-5.9c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v5.9c-.1.8-.7 1.5-1.5 1.5m23.4 0c-.8 0-1.5-.7-1.5-1.5v-5.9c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v5.9c0 .8-.7 1.5-1.5 1.5M24.7 12.9h14.6v3H24.7zM12.9 21.7h38.2v3H12.9zM45.2 27.6h2.9v2.9h-2.9zM39.3 27.6h3v2.9h-3zM33.5 27.6h2.9v2.9h-2.9zM27.6 27.6h2.9v2.9h-2.9zM21.7 27.6h3v2.9h-3zM45.2 33.5h2.9v2.9h-2.9zM39.3 33.5h3v2.9h-3zM33.5 33.5h2.9v2.9h-2.9zM27.6 33.5h2.9v2.9h-2.9zM21.7 33.5h3v2.9h-3zM15.9 33.5h2.9v2.9h-2.9zM45.2 39.3h2.9v3h-2.9zM39.3 39.3h3v3h-3zM33.5 39.3h2.9v3h-2.9zM27.6 39.3h2.9v3h-2.9zM21.7 39.3h3v3h-3zM15.9 39.3h2.9v3h-2.9zM39.3 45.2h3v2.9h-3zM33.5 45.2h2.9v2.9h-2.9zM27.6 45.2h2.9v2.9h-2.9zM21.7 45.2h3v2.9h-3zM15.9 45.2h2.9v2.9h-2.9z"></path>
              </g>
            </svg>
            <p>May 2024 - Sept 2024 </p>
          </div>
        </div>
        <div className="text-[22px] text-black px-10 font-bold">
          Full Stack Developer
        </div>
        <div className=" px-8 py-5">
          {keys?.map((index, title) => (
            <div className="flex items-baseline gap-2">
              <Image src={img} width={10} height={10} alt="ntg" />
              <h2 key={title} className="text-black text-[15px]">
                {index.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Exprerience;
