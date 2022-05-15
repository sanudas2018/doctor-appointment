import React from 'react';
import { format } from 'date-fns';


const AvailableAppoint = ({date, setDate}) => {
   return (
      <div>
         <p className='text-2xl text-secondary text-center'>Available Appointments:  {format(date, 'PP')}</p>
      </div>
   );
};

export default AvailableAppoint;