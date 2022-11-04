import React from "react";
import styled from "styled-components";
import { titlecolor,headingfont } from "../Component/Common";
import Cards from '../Component/Cards'

const Home = () => {
  const Home = styled.div`
    width: 100%;
    min-height: 95vh;
    background-color: #D6E4F0;
  `;
  const H1 = styled.h2`
    color: ${titlecolor};
    font-family: ${headingfont};
    font-size: 6rem;
     text-align: center;
  `;
  return (
    <Home>
      <H1>Blogs</H1>
      <Cards/>
    </Home>
  );
};

export default Home;
