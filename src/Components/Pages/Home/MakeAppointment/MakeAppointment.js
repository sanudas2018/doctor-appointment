import React from 'react';
import doctorimg from '../../../../assets/images/doctor-small.png';
import appiontmentimg from '../../../../assets/images/appointment.png';
import Button from '../../Shared/Button/Button';

const MakeAppointment = () => {
   return (
      <>
      <section
      style={{
         background:`url(${appiontmentimg})`
      }}
       className='flex justify-center items-center mt-40 mb-20'>
         <div className='flex-1 hidden lg:block'>
            <img className='mt-[-100px]' src={doctorimg} alt=''/>
         </div>
         <div className='flex-1 md:text-center sm:text-center'>
            <h3 className='text-primary text-xl font-bold'>Appointment</h3>
            <h2 className='text-3xl text-white'>Make An Appointment Today</h2>
            <p className='text-white my-8 sm:w-90 sm:inline-block lg:text-justify  lg:pr-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ullam beatae dolore distinctio architecto eligendi enim odit illo quod quia laboriosam neque, earum voluptas nihil. Soluta maxime quo deserunt aliquam, itaque velit laboriosam deleniti sunt dolor reiciendis error, officiis voluptatibus quaerat, pariatur perferendis inventore? Repellendus exercitationem id voluptatem ullam possimus?</p>
            
            <Button>Get Started</Button>
         </div>
      </section>
         
      </>
   );
};

export default MakeAppointment;