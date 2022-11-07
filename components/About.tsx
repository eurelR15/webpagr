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
      <h3 className='absolute top-16 uppercase tracking-[25px] text-gray-500 text-2xl'>About</h3>

        <motion.img
        initial={{x:-200,}}
        transition={{duration:1.2}}
        whileInView={{opacity:1,x:0}}
        viewport={{ once: true}}
        src="https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/313415537_941794110120116_4809559805842776386_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEV_xTor8B2hQin2e4C-ox0MgkfMDHBZL4yCR8wMcFkvqX7nXiylkA_fdRVEafC8Sm_-okQIgc4_SPqtR_ghU8Q&_nc_ohc=_ES5LDwLpwMAX9Yb9Xz&_nc_ht=scontent-jnb1-1.xx&oh=00_AfCgph6N5hRXdoHfVfaFrWbQCsMfi0vR638FW6sRm6Nv8w&oe=636D31ED"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 full object-cover md:rounded-lg md:w-54 md:h-55 xl:w[250px] xl:h-[250px]'/>
        <div className='spcae-y-10 px-0 md:px-10'>
            <h4 className='text-3xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'>little </span>background  about me.
                <p className='text-base'>
                I am a dynamic, perceptive, and gregarious person who never settles for anything less than the finest. I appreciate coming up with creative solutions to problems and problem-solving techniques. I thrive under pressure, work well in teams as well as alone, and am able to finish projects on schedule while delivering the greatest quality possible. My personal interests include traveling to and discovering interesting new areas. I enjoy observing sunrises and sunsets. I try to spend a lot of my time making my pets happy since they bring me joy. I adore watching movies and reading books. Music makes me feel peaceful, thus listening to it is one of my favorite activities.
                </p>
            </h4>
        </div>
      </motion.div>
    );
  }

