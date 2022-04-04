import React, { useContext, useEffect } from 'react';
import Footer from '../Components/Footer';
import myContext from '../Context/myContext';
import Header from '../Components/Header';

function Explore(props) {
  const { setShowSearchInput } = useContext(myContext);
  useEffect(() => {
    // console.log('didMount');
    setShowSearchInput((prevState) => !prevState);
  }, []);
  return (
    <section>
      <h1>Explore</h1>
      <Header { ...props } pageTitle="Explore" />
      <Footer />
    </section>
  );
}

export default Explore;
