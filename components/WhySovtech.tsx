import React from 'react';
import { motion } from "framer-motion";



type Props = {}



export default function About({}:Props) {
    return(
        <motion.div 
      initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Why Sovtec?</h3>
  
          <motion.img
          initial={{x:-200,}}
          transition={{duration:1.2}}
          whileInView={{opacity:1,x:0}}
          viewport={{ once: true}}
          src="https://innovationsoftheworld.com/wp-content/uploads/2020/10/Sovtech-Logo-01.png"
          className='-mb-20 md:mb-0 flex-shrink-0 w-90 h-90 full object-cover md:rounded-lg md:w-85 md:h-85 xl:w[130px] xl:h-[130px]'/>
          <div className='spcae-y-10 px-0 md:px-10'>
              <h4 className='text-4xl font-semibold'>
                 
                  <p className='text-base'>
                  I see this as an opportunity to contribute to a dynamic and growing business, and I believe my technological talents will enable me to do so.
Because I can relate to practically all of the firm's demographics, I think I have the expertise necessary to succeed in this position and at the company. I'm thrilled about this career opportunity since it will provide me the chance to express my originality and creativity.
                  </p>
              </h4>
          </div>
        </motion.div>
      );
    }

