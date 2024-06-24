"use client"

import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2 className="p-10 text-[50px]">Hello World</h2>
      <button className="border p-[10px] bg-gray-50" onClick={()=>{alert("Hello World")}}>Click me</button>
    </>
  );
}
