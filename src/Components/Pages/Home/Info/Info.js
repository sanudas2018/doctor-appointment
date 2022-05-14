import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../../assets/icons/clock.svg';
import marker from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';


const Info = () => {

   return (
      // এখানে css/ img / cardTitle কে dynamic করা হয়েছে (bgClass)
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5'>
         <InfoCard cardTitle='Opening Hours' bgColor='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
         <InfoCard cardTitle='Our Locations' bgColor='bg-[#3A4256]' img={marker}></InfoCard>
         <InfoCard cardTitle='Contact Us' bgColor='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
      </div>
   );
};

export default Info;