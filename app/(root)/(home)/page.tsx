import React from 'react';
import Hero from '../../../components/home/shared/hero';
import Sponsor from '../../../components/home/shared/sponsor';
import Footer from '../../../components/home/shared/footer';
import Link from '../../../components/home/shared/link';
import Testimonial from '../../../components/home/shared/testimonial';

const Home = () => {
  return (
    <div className='bg-[#f5f5f5]'>
      <Hero />
      <Sponsor />
      <Link />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
