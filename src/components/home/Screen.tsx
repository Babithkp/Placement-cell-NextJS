"use client"
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import homeImg from '../../../public/Images/heroimg.png'
import { addAdmin } from "@/lib/controller/admin";
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

export default function Screen() {
  const containerRef = useRef(null)

  useGSAP(()=>{
    gsap.from(".img",{x:300 ,opacity:0,duration:1.5,ease:"back"})
    gsap.from(".intro",{x:-300 ,opacity:0,duration:1.5,ease:"back"})
  },{scope:containerRef})

  useEffect(()=>{
    async function fetch(){
      await addAdmin()
    }
    fetch()
  },[])
  return (
    <div ref={containerRef} className="h-screen p-20 flex justify-between w-[100%] items-center overflow-hidden">
      <div className=" w-[230rem] intro">
        <h1 className="font-bold text-5xl leading-[55px]">
          Explore the lastest Opportunities - Everything at one place
        </h1>
        <div className="mt-4">
          <Button className="mr-4 bg-[#00448E]">Expore Now!</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <div className="img ">
        <Image src={homeImg} alt="home page image" className="ml-20"/> 
      </div>
    </div>
  );
}
