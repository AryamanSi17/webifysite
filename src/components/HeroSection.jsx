import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import React from 'react'

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">We Create
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Websites for you!
        </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 amx-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
        </p>
        <div className="flex mt-10 justify-center w-full lg:w-3/4  mx-auto">
        <video
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          src={video1}
          autoPlay
          loop
          muted
        ></video>
        <video
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          src={video2}
          autoPlay
          loop
          muted
        ></video>
        </div>
    </div>
  )
}
