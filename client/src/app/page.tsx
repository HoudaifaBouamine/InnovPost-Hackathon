"use client"
import React, { useEffect, useRef } from "react";
import Particles from "@/components/particles";
import Typed from "typed.js";
import Image from 'next/image';

export default function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Welcome to", "Algerie Post"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 500,
      startDelay: 500,
      loop: false, // To prevent it from looping continuously
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue-900 via-zinc-600/20 to-black-700">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5  px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        <span ref={typedElement} ></span>
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
 
      </div>
    </div>
  );
}