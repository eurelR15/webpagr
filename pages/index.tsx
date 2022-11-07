import type {GetStaticProps } from 'next';
import Head from 'next/head'; 
import Header from '../components/Header';
import Hero from "../components/Hero";
import About from "../components/About";
import WhySovtech from "../components/WhySovtech";
import ContactMe from '../components/ContactMe';
import Link from "next/link";
import Skills from "../components/Skills"
import {Skill} from '../typings'
import { fetchSkills } from '../utils/fetchSkills';



type Props={
  skills:Skill[];


};
const Home = ({skills}:Props) => {
  return (
    <div className='bg-[rgb(36,32,32)] text-white h-screen snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-pink-400/20  scrollbar-thumb-[#785b73]/80'>
      <Head>
        <title>Eurels Portfolio</title>
      </Head>
      
   
      
      <section
        id="hero" className='snap-start' >
        <Hero />
      </section>

      
      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="reason" className='snap-center'>
        <WhySovtech />
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>
    
    
    <section id='contact' className='snap-start'> 
      <ContactMe />
    </section>
  
    

    <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className='flex item-center justify-center'>
        <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor pointer'
        src="https://imgs.search.brave.com/cY0c39zPCCnufDQl155CN6zT1-RiIeRc6sRTHh6AIOY/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/NlpxUi1TRkdjYXNs/cG44WHZTVnhBSGFF/OCZwaWQ9QXBp" />
      </div>
      </footer>
    </Link>
    </div> 
  )
}
  


export default Home;

export const getStacicProps: GetStaticProps<Props>=async ()=>{
  const skills:Skill[] = await fetchSkills();

  return{
    props:{
      skills,
   

      revalidate:10,
    }
  }

}