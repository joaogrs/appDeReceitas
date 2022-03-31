import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Drinks(props) {
  return (
    <section>
      <h1>Drinks</h1>
      <Header { ...props } pageTitle="Drinks" />
      <Footer />
    </section>
  );
}

export default Drinks;
