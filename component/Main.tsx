'use client'
import React from "react";
import Image from 'next/image';


export function Main() {
  return (
    <section id="home" className="relative h-screen bg-black">
     <Image
        src="/Images/main.jpg"         
        alt="Company"
        fill
        priority
        className="object-cover opacity-80"
        style={{ zIndex: 0 }}
        
    />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* <h1 className="text-5xl font-bold mb-4">Welcome to Our Agency</h1>
        <p className="text-lg max-w-xl">We create bold social media experiences that connect and convert.</p> */}
      </div>
    </section>
  );
}
