import React, { useState } from 'react';
import bangarImag from '../../../../assets/images/chair.png'
import bgimg from '../../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppionBanner = () => {
   const [date, setDate] = useState(new Date());
   return (
         <div
         style={{
            background:`url(${bgimg})`
         }}
         className='hero min-h-screen'>
            <div className='hero-content flex flex-col justify-between lg:flex-row-reverse '>
               <img className='w-7/12 rounded-lg shadow-xl' src={bangarImag} alt=''/>
               <div className=''>
               <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  
               />
               <p>You have selected:  {format(date, 'PP')}</p>
               </div>
            </div>
            
         </div>
   );
};

export default AppionBanner;