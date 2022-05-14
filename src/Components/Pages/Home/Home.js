import React from 'react';
import Banner from './Banner/Banner';
import ContactsUs from './ContactsUs/ContactsUs';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';

import Testimonials from './Testimonials/Testimonials';


const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Info></Info>
         <Services></Services>
         <MakeAppointment></MakeAppointment>
         <Testimonials></Testimonials>
         <ContactsUs></ContactsUs>
      </div>
   );
};

export default Home;