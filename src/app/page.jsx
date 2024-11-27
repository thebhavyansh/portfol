import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Exprerience from "./components/Exprerience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <Exprerience />
    <Projects />
    <Contact />
    </>
  );
}
