import React from 'react'
import styled from 'styled-components';
import SearchCard from './SearchCard';

const SearchCards = () => {
    const Cards = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    /* background-color: #D6E4F0; */
  `;
  return (
    <Cards>
      <SearchCard/>
      <SearchCard/>
      <SearchCard/>
      <SearchCard/>
    </Cards>
  )
}

export default SearchCards
