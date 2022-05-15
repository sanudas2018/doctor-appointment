import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, setTreatment, date}) => {
   const {_id, name, slots} = treatment;
   const handleBooking = event => {
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(_id, name ,slot);
      setTreatment(null);
   }
   return (
      <div>
        <input type='checkbox' id='booking-modal' className='modal-toggle' />
         <div className='modal modal-bottom sm:modal-middle bg-gradient-to-r from-secondary to-primary'>
            <div className='modal-box'>
            <label for='booking-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>✕</label>
               <h3 className='font-bold text-lg text-center text-primary mb-3'>Booking For: {name}</h3>
               
               <form onSubmit={handleBooking} classNameName='grid grid-cols-1 gap-3 justify-items-center'>
               <input type='text' disabled value={format(date, 'PP')} className='input input-bordered w-full max-w-xs' />
               
               <select name='slot' className='select select-bordered w-full max-w-xs'>
                  {/* <option disabled selected>Who shot first?</option>
                  <option>Han Solo</option>
                  <option>Greedo</option> */}
                  {
                     slots.map(slot => <option value={slot}>{slot}</option>)
                  }
               </select>

               <input name='name' type='text' placeholder='Your Name' className='input input-bordered w-full max-w-xs' />
               <input name='email' type='email' placeholder='Email Address' className='input input-bordered w-full max-w-xs' />
               <input name='phone' type='number' placeholder='Phone Number' className='input input-bordered w-full max-w-xs' />

               <input type='submit' value='Submit' className='btn w-full max-w-xs bg-gradient-to-r from-secondary to-primary' />
               </form>
               
               {/* <div className='modal-action'>
                  <label for='booking-modal' className='btn'>Yay!</label>
               </div> */}
            </div>
         </div>
      </div>
   );
};

export default BookingModal;