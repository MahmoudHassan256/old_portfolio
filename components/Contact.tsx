import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};
type Props = {}

function Contact({ }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formdata => {
    window.location.href=`mailto:mahmoud_h_98@hotmail.com?subject=${formdata.subject}&body=Hi im ${formdata.name} owner of ${formdata.email}.
    ${formdata.message}
    `
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[10px] text-black text-2xl'
      >Contact Me</h3>
      <div className='flex flex-col space-y-2'>
        <h4 className='text-4xl font-semibold text-center'>Are you intrested?? <span className='underline decoration-blue-500'>Let's Talk</span></h4>
        <div className='space-y-4'>

          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-blue-500 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+123456789</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-blue-500 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>mahmoud_h_98@hotmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-blue-500 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>home</p>
          </div>
        </div>

        <form className='flex flex-col space-y-2 mx-auto w-fit' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex space-x-2'>
            <input {...register('name')} className='contactInput' placeholder="Name" type="text" />
            <input {...register('email')} className='contactInput' placeholder='Email' type="email" />
          </div>

          <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />

          <textarea {...register('message')} placeholder='Message' className='contactInput' />

          <button type='submit' className='bg-blue-500 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact