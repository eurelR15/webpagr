import React from 'react';
import {PhoneIcon,EnvelopeIcon} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs={
    name:string;
    email:string;
    subject:string;
    message:string;
};

type Props = {}

function ContactMe({}: Props) {
    const {register,handleSubmit,}=useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs>=data => {
        window.location.href='mailto:rambaraneurel@gmail?subject=${data.subject}&body=Hi,my name is ${data.name}.${data.message} (${data.email}';
    };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

    <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

    <div className='flex flex-col space-y-10'>

        <h4 className='text-2xl font-semibold text-center'>
            I have got just what you need.{""}
            <span className='decoration-[#b4279b]/50 underline'>Let's talk.</span>
        </h4>
   
    <div className='flex items-center space-x-5 justify-center'>

    <div className='flex items-center space-x-5'>
        <PhoneIcon  className=" text-[#b4279b] h-7 w-7 animate-pulse"/>

        <p className='text-2xl'>0813788189</p>
    </div>

    <div className='flex items-center space-x-5'>
        <EnvelopeIcon className=" text-[#b4279b] h-7 w-7 animate-pulse"/>

        <p className='text-2xl'>rambaraneurel@gmail.com</p>

    </div>

    </div>
    <form  onSubmit={handleSubmit(onSubmit)}className='flex flex-col space-y-2 w-fit mx-auto'>

        <div className='flex space-x-2'>

            <input {...register('name')}placeholder='Name' className=""type="text" />

            <input {...register('email')}placeholder="Email" className="contactInput"type="email" />

        </div>
        <input {...register('subject')}placeholder="Subject"className="contactInput"type="text" />

        <textarea {...register('message')} placeholder='Message' className='contactInput'/>

        <button type='submit' className='bg-[#d127b3] py-5 px-10 rounded-md text-black font-bold text-ig'>Submit</button>
    </form>

    </div>

    </div>
  )
}

export default ContactMe;