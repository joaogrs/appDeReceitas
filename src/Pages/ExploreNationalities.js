import React from 'react';
import Header from '../Components/Header';

function ExploreNationalities(props) {
  return (
    <section>
      <h1>Explore Nationalities</h1>
      <Header { ...props } pageTitle="Explore Nationalities" />
    </section>
  );
}

export default ExploreNationalities;
