"use client"
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Clients from "@/components/Clients";
import Form from "../components/Form";
import Headline from "@/components/Headline";
import Aboutus from "@/components/Aboutus";
import Service from "@/components/Service";
import Mobnav from "@/components/Mobnav";
import Why from "@/components/Why";
import Contact from "@/components/Contact";
import Google from "@/components/Google";
const page = () => {
  const myRef = useRef()
  const [visible, setvisible] = useState()

  useEffect(()=>{
    

    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]
      const Intersecting = entry.isIntersecting
      setvisible(Intersecting)
      
    })

    observer.observe(myRef.current)
    

  },[])
  
   

  return (
    <>
    
      <div className="top-0 z-auto fixed w-full">
        {visible&& <Headline />} 
        <Navbar />
        <Mobnav />
      </div>

      <div className=" flex flex-col  place-content-center pt-5 mt-5 gap-5" >
        <section className=" h-full pt-20 " id="home" ref={myRef}>
          <Image
            src="/cover.png"
            width={1600}
            height={800}
            min-height={600}
            alt="group "
            className=""
          />
        </section>
        <section className=" h-auto pt-20" id="about-us">
          <Aboutus />
        </section>
        <section id="clients" className="p-20 ">
          <Clients />
        </section>

        <section className={` pt-24`} id="career">
          <h1 className="text-center text-2xl">
            <span className="bg-blue-950 p-2 text-white rounded-2xl">
              Career
            </span>
          </h1>
          <h1 className="text-center text-xl mt-5">
            Do you want to work with us ,join us by filling the Form
          </h1>
          <Form />
          <span className="pt-10 pb-10 flex text-center justify-center">
            OR
          </span>
          <a
            className="flex  text-center justify-center bg-green-600 text-white p-2 rounded-3xl w-2/5 m-auto"
            href="www.google.com"
          >
            <img src="whatsapp.svg" alt=" " width={50} height={50}></img> Join
            our Whatsapp group
          </a>
        </section>

       <Service />
       <Why />
       <Contact />
       <Google />

      </div>
    </>
  );
};

export default page;
