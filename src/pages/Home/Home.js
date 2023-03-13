import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";

const Home = (props) => {
  return (
    <>
      <Header />
      <main>
        <Landing />
      </main>
    </>
  );
};

export default Home;
