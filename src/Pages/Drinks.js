import React from 'react';
import Header from '../Components/Header';

function Drinks(props) {
  return (
    <section>
      <h1>Drinks</h1>
      <Header { ...props } pageTitle="Drinks" />
    </section>
  );
}

export default Drinks;
