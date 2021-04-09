import React from 'react';
import Footer from '../components/shared/footer';
import Main from '../components/freelancer/main';
import Nav from '../components/shared/navbar';

const FreelancerHomepage = () => {


  return (
    <div className="bg-bodyGray">
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default FreelancerHomepage;