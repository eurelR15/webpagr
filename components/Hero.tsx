import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";



type Props = {};



export default function Hero({}:Props) {
    const [text, count] = useTypewriter({words:["Hi there..My Name Is Eurel Rambaran","Pronounced as You-ral","<Some may think URL />"],
    loop: true,delaySpeed: 2000,});
    return(
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative full h-32 w-32 mx-auto object-cover'
        src="https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/313257941_941595236806670_5822694382301098093_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEnivx2X5kUUjvipzL6gTpUFkQ7lOFnylMWRDuU4WfKUxskZMIoyeZX6_Vd7hzhhzzvT9pzQRPfICBWzCFYyAYY&_nc_ohc=n34cvuzVdi4AX8vqJ1_&_nc_ht=scontent-jnb1-1.xx&oh=00_AfCb9w3q3FKkmOHsouX2rHvCw99xENbajAUxtwp2WD5zEw&oe=636DC35A" alt=""/>
        <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='=mr-3'>{text}</span>
            <Cursor cursorColor='#F7ABBA' />
        </h1>
        <div className='pt-5'>
            <Link href="#about">
            <button className="abutton">About</button>
            </Link>
            <Link href="#reason">
            <button className='abutton'>Why SovTech</button>
            </Link>
            <Link href="#skill">
            <button className='abutton'>Skills</button>
            </Link>
            <Link href="#contact">
            <button className='abutton'>Contact</button>
            </Link>
        </div>
        </div>
    </div>);
    
  }
