"use client"
import React, { useState } from "react";

export default function ClickToMore({ description }:any) {
    const [isDropped,setIsDropped] = useState(false)
  return (
    <>
  {!isDropped && <p>{description.substring(0, 60)}...<span className="cursor-pointer" onClick={()=>setIsDropped(!isDropped)}>More</span></p>}
  {isDropped && <p>{description}...<span className="cursor-pointer" onClick={()=>setIsDropped(!isDropped)}>Less</span></p>}
    </>
  );
}
