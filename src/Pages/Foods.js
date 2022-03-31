import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Foods(props) {
  return (
    <section>
      <h1>Foods</h1>
      <Header { ...props } pageTitle="Foods" />
      <Footer />
    </section>
  );
}

export default Foods;
