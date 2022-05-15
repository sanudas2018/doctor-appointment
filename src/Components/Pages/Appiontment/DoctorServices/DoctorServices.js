import React from 'react';


const DoctorServices = ({service}) => {
  const {name, slots} = service;
   
   return (
      <>
         <div class="card lg:max-w-lg bg-base-100 shadow-xl">
               <div class="card-body items-center text-center">
               <h2 class="card-title">{name}</h2>
               <p>{
                     slots.length > 0 
                     ? <span>{slots[0]}</span>
                     : <span className='text-red-500'>No Slot Available</span>
                  }</p>
               <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
               <div class="card-actions">
                  <button disabled={slots.length === 0} className='btn btn-primary uppercase text-white font-bold 
          bg-gradient-to-r from-secondary to-primary
          '>Booking Now</button>
               </div>
            </div>
         </div>

      </>
   );
};

export default DoctorServices;