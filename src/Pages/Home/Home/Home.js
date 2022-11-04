import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
   return (
      <div className="max-w-screen-xl mx-auto mb-14">
         <Banner></Banner>
         <Services></Services>
      </div>
   );
};

export default Home;
