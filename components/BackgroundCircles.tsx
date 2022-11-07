import React from 'react'
import {motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <motion.div initial={{opacity:0,}}
        animate={{scale:[1,2,2,3,1],opacity:[0.1,0.2,0.4,0.8,0.1,1.0],borderRadius:["20%","20%","50%","80%","20%"],}}
        transition={{duration:2.5,}}
        className='absolute border border-[rgb(136,14,79)] full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[rgb(74,20,140)] full h-[300px] w-[300px] mt-52'/>
        <div className='absolute border border-[rgb(123,31,100)] full h-[500px] w-[500px] mt-52 '/>
        <div className='full border border-[rgb(194,24,91)] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse'/>
        <div className='absolute border border-[rgb(156,39,176)] full h-[800px] w-[800px] mt-52'/>
    </div>
  )
}

export default BackgroundCircles;