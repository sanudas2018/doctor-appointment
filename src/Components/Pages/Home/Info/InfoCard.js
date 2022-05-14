import React from 'react';


const InfoCard = ({img, cardTitle, bgColor}) => {
   return (
      <div className={`card lg:card-side bg-base-100 shadow-xl text-white ${bgColor}`}>
         <figure className='pl-5'>
            <img className='w-8 ' src={img} alt='Album'/>
         </figure>
         <div className='card-body'>

            <h2 className='card-title '>{cardTitle}</h2>
            <p className=''>Click the button to listen on Spotiwhy app'</p>
            
         </div>
      </div>
         
   );
};

export default InfoCard;