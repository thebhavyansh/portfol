import React from "react";
import react from "../../../public/react.png";
import drizzle from "../../../public/drizzle.png";
import firebase from "../../../public/firebase.png";
import mapbox from "../../../public/mapbox.png";
import mongo from "../../../public/mongo.png";
import tailwind from "../../../public/tailwind.png";
import postgres from "../../../public/postgres.png";
import fshare from "../../../public/FShare.png"
import vercel from "../../../public/vercel.svg";
import ts from "../../../public/ts.png";
import next from "../../../public/next.svg";
import clerk from "../../../public/download.png";
import node from "../../../public/node.png";
import Image from "next/image";
import Link from "next/link";
import c from "../../../public/c.png";
import cpp from "../../../public/c++.png"
import css from "../../../public/css.jpeg";
import travel from "../../../public/travel.png"
import express from "../../../public/express.png"
import html from "../../../public/html.png"
import fs from "../../../public/fs.png"
import jquery from "../../../public/jquery.png"
import js from "../../../public/js.jpeg"
import jwt from "../../../public/jwt.png"
import mysql from "../../../public/mysql.png"
import "./all.css";
import npm from "../../../public/npm.png"
import python from "../../../public/python.jpeg"
import scss from "../../../public/scss.png"
import strapi from "../../../public/strapi.png"
import ai from "../../../public/ai.png"
function Projects() {
  const technologie = [
    { name: "React", import: react },
    { name: "Drizzle", import: drizzle },
    { name: "Firebase", import: firebase },
    { name: "Mapbox", import: mapbox },
    { name: "MongoDB", import: mongo },
    { name: "Tailwind CSS", import: tailwind },
    { name: "PostgreSQL", import: postgres },
    { name: "Vercel", import: vercel },
    { name: "TypeScript", import: ts },
    { name: "Next.js", import: next },
    { name: "Clerk", import: clerk },
    { name: "Node.js", import: node },
    { name: "C", import: c },
    { name: "C++", import: cpp },
    { name: "CSS", import: css },
    { name: "Express.js", import: express },
    { name: "HTML", import: html },
    { name: "jQuery", import: jquery },
    { name: "JavaScript", import: js },
    { name: "JWT", import: jwt },
    { name: "MySQL", import: mysql },
    { name: "npm", import: npm },
    { name: "Python", import: python },
    { name: "SCSS", import: scss },
    { name: "Strapi", import: strapi },
  ];
  
  const technologies = [
    { name: "React.js", logo: react },
    { name: "Next.js", logo: next },
    { name: "Tailwind CSS", logo: tailwind },
    {name:"Node.js",logo:node},
    { name: "Clerk", logo: clerk },
    { name: "Node.js", logo: node },
  ];
  const tech2= [
    { name: "React.js", logo: react },
    { name: "Next.js", logo: next },
    { name: "Tailwind CSS", logo: tailwind },
    {name:"Node.js",logo:node},
    { name: "Clerk", logo: clerk },
    { name: "Drizzle ORM", logo: drizzle },
    { name: "Postgrsql",logo:postgres},
  ]
  const tech = [
    { name: "React.js", logo: react },
    { name: "Next.js", logo: next },
    { name: "Tailwind CSS", logo: tailwind },,
    { name: "Clerk", logo: clerk },
    {name:"Node.js",logo:node},
    { name: "MongoDB", logo: mongo },
    { name: "Mapbox",logo:mapbox},
  ]
  return (
    <div className="flex my-20 flex-col items-center justify-center gap-10">
      <div className="text-[#cd9403] items-center ft  flex flex-col md:text-[45px] text-[30px] font-bold">
        <p>Projects I've </p>
        <p>Worked On</p>
      </div>
      <div className="bg-[#102762] flex flex-col md:flex-row p-5 border border-transparent justify-between rounded-3xl md:w-[900px]">
        <div className="md:m-5 m-8 text-white flex flex-col gap-2">
          <h1 className="md:text-[40px]  text-center text-[30px] font-bold mb-4">Fshare</h1>
          <h4>A secure file-sharing app with password-protected file sharing</h4>
          <h2 className="my-2 text-[20px] font-semibold">Worked on</h2>
          <div className="flex gap-2 flex-wrap"><div className="flex border border-transparent gap-2 rounded-full p-1 bg-[#405380]  text-white">
            <p className="px-2">
              Website
            </p>
          </div>
         <div className="flex border border-transparent gap-2 rounded-full p-1 bg-[#405380]  text-white">
          <div className="px-2">Frontend</div>
          </div>
         <div className="flex border border-transparent gap-2 rounded-full p-1 bg-[#405380]  text-white">
          <div className="px-2">Backend</div>
            
          </div>
          <div className="flex border border-transparent gap-2 rounded-full p-1 bg-[#405380]  text-white">
          <div className="px-2">Database</div></div>
          </div>
            
           
          <h3 className="my-2 text-[20px] font-semibold">Technologies i used</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((title,index)=>(
            <div className="flex"><div className="flex border rounded-full p-1 bg-[#c9c9c9] text-black">
            <Image src={title.logo} className="border rounded-full" width={23} height={20} alt="ll"/>
            <p className="px-2">{title.name}</p>
          </div></div>
          ))}
          </div>
        </div>

        <div className="min-w-[380px] max-h-[400px]  flex items-center flex-col bg-[#0258da] border border-transparent rounded-3xl m-5">
          <Image src={fshare} width={600} height={600} className="p-4"/>
          <Link href="/" className="flex border border-transparent gap-2 w-[300px] justify-center mb-3 items-center rounded-full p-3 bg-[#263d73]    text-white">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
          <p className="text-[18px]">Go to FShare</p>
          </Link>
        </div>
      </div>
      <div className="bg-[#3f031b]  flex flex-col md:flex-row p-5 border border-transparent justify-between rounded-3xl md:w-[900px]">
      <div className="min-w-[380px]  flex flex-col items-center bg-[#7d163e] border border-transparent rounded-3xl m-5">
      <Image src={ai} width={600} height={600} className="p-4"/>
          <Link href="/" className="flex border opacity-70 gap-2 w-[300px] mb-3 justify-center items-center rounded-full p-3 bg-transparent    text-white">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
          <p className="text-[18px]">Go to Mock-interview</p>
          </Link>
      </div>
        <div className="md:m-5 m-8 flex flex-col gap-2">
          <h1 className="md:text-[40px] text-center text-[30px] font-bold mb-4">Ai-mock-interview</h1>
          <h4>A full-stack AI mock interview platform with real-time audio/video recording and speech-to-text conversion.</h4>
          <h2 className="my-2 text-[20px] font-semibold">Worked on</h2>
          <div className="flex gap-2 flex-wrap"><div className="flex border border-transparent gap-2 rounded-full p-1 bg-[#643449]  text-white">
            <p className="px-2">
              Website
            </p>
          </div>
         <div className="flex border border-transparent gap-2 rounded-full p-1 bg-[#643449]  text-white">
          <div className="px-2">Frontend</div>
          </div>
         <div className="flex border border-transparent gap-2 rounded-full p-1 bg-[#643449]  text-white">
          <div className="px-2">Backend</div>
          </div>
          <div className="flex border border-transparent gap-2 rounded-full p-1 bg-[#643449]  text-white">
          <div className="px-2">Database</div></div>
          </div>
          <h3 className="my-2 text-[20px] font-semibold">Technologies i used</h3>
          <div className="flex flex-wrap gap-2">
            {tech2.map((title,index)=>(
            <div className="flex"><div className="flex border rounded-full p-1 bg-[#c9c9c9] text-black">
            <Image src={title.logo} className="border rounded-full" width={23} height={20} alt="ll"/>
            <p className="px-2">{title.name}</p>
          </div></div>
          ))}
          </div>
        </div>
      </div>
      <div className="bg-[#820333] p-5 flex flex-col md:flex-row border border-transparent justify-between rounded-3xl md:w-[900px]">
        <div className=" md:m-5 m-8 flex flex-col gap-2">
          <h1 className="md:text-[40px] text-center text-[30px] font-bold mb-4">Travel Taxi</h1>
          <h2 className="my-2 text-[20px] font-semibold">Worked on</h2>
          <div className="flex gap-2 flex-wrap"><div className="flex border border-transparent gap-2 rounded-full p-1 bg-[#643449]  text-white">
            <p className="px-2">
              Website
            </p>
          </div>
         <div className="flex border border-transparent gap-2 rounded-full p-1 bg-[#643449]  text-white">
          <div className="px-2">Frontend</div>
          </div>
         <div className="flex border border-transparent gap-2 rounded-full p-1 bg-[#643449]  text-white">
          <div className="px-2">Backend</div>
          </div>
          <div className="flex border border-transparent gap-2 rounded-full p-1 bg-[#643449]  text-white">
          <div className="px-2">Database</div></div>
          </div>
          <h3 className="my-2 text-[20px] font-semibold">Technologies i use</h3>
          <div className="flex flex-wrap gap-2">
            {tech.map((title,index)=>(
            <div className="flex"><div className="flex border rounded-full p-1 bg-[#c9c9c9] text-black">
            <Image src={title.logo} className="border rounded-full" width={23} height={20} alt="ll"/>
            <p className="px-2">{title.name}</p>
          </div></div>
          ))}
          </div>
        </div>
        <div className="min-w-[380px]  flex flex-col py-2 items-center bg-[#d98fa8] border border-transparent rounded-3xl m-5">
        <Image src={travel} width={600} height={600} className="p-4"/>
          <Link href="/" className="flex border opacity-70 gap-2 w-[300px] justify-center items-center mb-3 rounded-full p-3 bg-transparent    text-white">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
          <p className="text-[18px] my-1 text-black">Go to TravelTaxi</p>
          </Link>
        </div>
      </div>
      <div className="text-[#cd9403] ft items-center  flex flex-col md:text-[45px] text-20px font-bold">
        <p>Technologies i used</p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 md:w-[800px]">
      {technologie.map((title,index)=>(
            <div className="flex"><div className="flex border rounded-full p-1 bg-[#c9c9c9] text-black">
            <Image src={title.import} className="border rounded-full" width={23} height={20} alt="ll"/>
            <p className="px-2">{title.name}</p>
          </div></div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
