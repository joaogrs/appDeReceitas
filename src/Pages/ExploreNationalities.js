import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function ExploreNationalities(props) {
  return (
    <section>
      <h1>Explore Nationalities</h1>
      <Header { ...props } pageTitle="Explore Nationalities" />
      <Footer />
    </section>
  );
}

export default ExploreNationalities;
