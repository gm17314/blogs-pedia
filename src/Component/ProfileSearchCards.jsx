import React from 'react'
import styled from 'styled-components';
import ProfileSearchCard from './ProfileSearchCard';

const ProfileSearchCards = () => {
    const Cards = styled.div`
    width: 100%;
    height: 22.5rem;
    display: flex;
    overflow: auto;
    flex-direction: column;
    /* border:1px solid yellow; */
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
  
    &::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        background-color: grey;
    }
  `;
  return (
    <Cards>
      <ProfileSearchCard/>
      <ProfileSearchCard/>
      <ProfileSearchCard/>
    </Cards>
  )
}
export default ProfileSearchCards