import React from "react";
import styled from "styled-components";
import { flex, parafont } from "../Component/Common";
import SearchCards from "../Component/SearchCards";

const Search = () => {
  const Search = styled.div`
    width: 100%;
    min-height: 90vh;
    background-color: #D6E4F0;
    padding-top: 3rem;
    padding-bottom:1rem;
  `;
  const SearchBox = styled(flex)`
    width: 60%;
    margin: auto;
    justify-content: space-between;
    flex-direction: column;
    border-radius:1rem;
    box-shadow:0 .1rem .3rem .1rem rgba(194, 189, 189, 0.76);
    border: 1px solid rgba(194, 189, 189, 0.76);
  `;
  const Input = styled.input`
    width: 50%;
    height: 5rem;
    border-radius: 1.5rem;
    border:1px solid grey;
    margin: 4rem;
    padding:1rem;
    outline: 0;
    font-size:2rem;
    font-family: ${parafont};
    background-color: #fdfafac2;
  `;

  return (
    <Search>
      <SearchBox>
        <Input placeholder="Search User here..."/>
        <SearchCards/>
      </SearchBox>
    </Search>
  );
};

export default Search;
