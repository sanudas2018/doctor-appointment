import React from 'react';
import Button from '../../Shared/Button/Button';
import bgimg from '../../../../assets/images/appointment.png'

const ContactsUs = () => {
   const handleSubmit = {

   }
   return (
      <>
      <section style={{
         background:`url(${bgimg})`
      }} className='overflow-hidden mb-10'>
         <div className='text-center mt-4'>
            <h5 className='text-primary font-bold uppercase text-2xl'>Contact Us</h5>
            <h3 className='text-white text-4xl'>Stay Connected With Us</h3>
         </div>
         <div className=' mt-10 lg:w-100  mb-4'>
            <form onSubmit={()=> handleSubmit()} className='flex flex-col items-center justify-items-center gap-3 '>
            <input type='email' placeholder='Email Address' className='input input-bordered input-md w-full max-w-xs lg:min-w-lg' />
            <input type='text' placeholder='Subject' className='input input-bordered input-md w-full max-w-xs' />
            <textarea className='textarea textarea-primary input-md w-full max-w-xs lg:min-w-lg' placeholder='Your Message'></textarea>
            <Button className=''>SUBMIT</Button>
            </form>
         </div>
      </section>
         
      </>
   );
};

export default ContactsUs;