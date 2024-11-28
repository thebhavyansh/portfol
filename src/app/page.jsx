"use client"
import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Exprerience from "./components/Exprerience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    console.log(document.getElementById("projects")); // Should log the element or `null`
  }, []);
  
  return (
    <>
    <Header />
    <div id="banner">
      <Banner />
    </div>
    <div id="experience">
      <Exprerience />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="contact">
      <Contact />
    </div>
  </>
  );
}
