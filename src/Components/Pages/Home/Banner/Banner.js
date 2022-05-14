import React from 'react';
import bangarImag from '../../../../assets/images/chair.png'
import Button from '../../Shared/Button/Button';

const Banner = () => {
   return (
      <> 
         <div className='hero min-h-screen bg-amber-400 '>
            <div className='hero-content flex-col lg:flex-row-reverse '>
               <img className='w-6/12 rounded-lg shadow-xl' src={bangarImag} alt=''/>
               <div className=''>
                  <h1 className='text-5xl font-bold '>Your New Smile Starts Here</h1>
                  <p className='py-6'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <Button>Get started</Button>
               </div>
            </div>
         </div>
      </>
   );
};

export default Banner;