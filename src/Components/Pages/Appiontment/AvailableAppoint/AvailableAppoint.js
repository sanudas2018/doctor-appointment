import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import DoctorServices from '../DoctorServices/DoctorServices';





const AvailableAppoint = ({date, setDate}) => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch('services.json')
         .then(res => res.json())
         .then(data => setServices(data));
   }, []);
   return (
      <div>
         <p className='text-2xl text-secondary text-center'>Available Appointments:  {format(date, 'PP')}</p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           {
              services.map(service => <DoctorServices key={service._id} service={service}></DoctorServices>)
           }
         </div>
      </div>
   );
};

export default AvailableAppoint;