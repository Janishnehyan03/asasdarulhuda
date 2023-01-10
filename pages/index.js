import { Inter } from "@next/font/google";
import Head from "next/head";
import Cards1 from "../components/Cards1";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards2 from "../components/Cards2";
import Carousel from "../components/Carousel";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>ASAs Darul Huda</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Carousel />
      {/* <HeroSection /> */}
      <Features />
      <Cards1 />
      <Cards2 />
      <Contact />
      <Footer />
    </>
  );
}
