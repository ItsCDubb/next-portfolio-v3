import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Layout from "../src/layouts/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);
  return (
    <Layout dark>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Service dark />
      <Contact />
    </Layout>
  );
};

export default Index;
