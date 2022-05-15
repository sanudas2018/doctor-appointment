import React from 'react';


const DoctorServices = ({service, setTreatment}) => {
  const {name, slots} = service;
   
   return (
      <>
         <div className='card lg:max-w-lg bg-base-100 shadow-xl'>
            <div className='card-body items-center text-center'>
               <h2 className='card-title'>{name}</h2>
               <p>{
                     slots.length > 0 
                     ? <span>{slots[0]}</span>
                     : <span className='text-red-500'>No Slot Available</span>
                  }</p>
               <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
               <div className='card-actions'>
                  
                  <label
                   disabled={slots.length === 0} 
                   onClick={() => setTreatment(service)}
                  htmlFor='booking-modal' 
                  className='btn btn-primary uppercase text-white font-bold 
                  bg-gradient-to-r from-secondary to-primary'>Booking Now</label>
               </div>
            </div>
         </div>

      </>
   );
};

export default DoctorServices;