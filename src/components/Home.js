import React from 'react';
import Banner from './Banner';
import Testimonials from './Testimonial/Testimonials';
import About from './About';
import WhyChoose from './WhyChoose/WhyChoose';
import Books from './Books';
import BookServices from './Books';
import Contact from './Contact';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <BookServices></BookServices> */}
      <About></About>
      <WhyChoose></WhyChoose>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default Home;