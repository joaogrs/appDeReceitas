import React from 'react';
import Header from '../Components/Header';

function Foods(props) {
  return (
    <section>
      <h1>Foods</h1>
      <Header { ...props } pageTitle="Foods" />
    </section>
  );
}

export default Foods;
