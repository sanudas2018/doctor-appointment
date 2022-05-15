import React, { useState } from 'react';
import AppionBanner from './AppionBanner/AppionBanner';
import AvailableAppoint from './AvailableAppoint/AvailableAppoint';

const Appiontment = () => {
   const [date, setDate] = useState(new Date());
   return (
      <div>
         <AppionBanner date={date} setDate={setDate}></AppionBanner>
         <AvailableAppoint date={date} setDate={setDate}></AvailableAppoint>
      </div>
   );
};

export default Appiontment;