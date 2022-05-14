import React from 'react';

const Review = ({review}) => {
   const {img, name, reviewRating, location} = review;
   return (
      <div>
         <div className='card lg:max-w-lg bg-base-100 shadow-xl'>
            <div className='card-body bg-slate-700 text-white mt-3'>

               <h2 className='card-title'>{name}</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div className='flex items-center mt-2 '>
                  <div className='avatar'>
                     <div className='w-16 rounded-full ring ring-primary ring-offset-base-100 mr-2'>
                        <img className='' src={img} alt='' />
                     </div>
                  </div>
                  <div>
                     <h4 className='text-xl'>{name}</h4>
                     <p>{location}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Review;