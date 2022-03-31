import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CardDrink from '../Components/CardDrink';

function Drinks(props) {
  return (
    <section>
      <h1>Drinks</h1>
      <Header { ...props } pageTitle="Drinks" />
      <CardDrink />
      <Footer />
    </section>
  );
}

export default Drinks;
