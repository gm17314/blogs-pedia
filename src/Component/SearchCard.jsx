import React from "react";
import styled from "styled-components";
import { headingfont, titlecolor } from "./Common";

const SearchCard = () => {
  const Card = styled.div`
    width: 95%;
    height: 8rem;
    display: flex;
    margin: 1.6rem;
    justify-content: space-between;
    align-items: center;
    border-bottom:2px solid grey;
    
  `;
  const User = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
  `;
  const Img = styled.img`
    border-radius: 50%;
    height: 6rem;
    width: 6rem;
  `;
  const Detail = styled.div`
    width: 70%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `;
  const Name = styled.h2`
    /* color: ${titlecolor}; */
    font-family: ${headingfont};
    font-size: 2.5rem;
  `;
  const Email = styled.p`
    color: grey;
    font-weight: 500;
    font-size: 1.7rem;
  `;
  const Button = styled.button`
    color: white;
    background-color:#0000ffdb;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 2.3rem;
    border-radius: 0.4rem;
    padding: 0.3rem 0.6rem;
    border:0;
    cursor:pointer;
    
  `;
  return (
    <Card>
      <User>
        <Img src="https://images.pexels.com/photos/3810915/pexels-photo-3810915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Detail>
          <Name>Gaurav</Name>
          <Email>gm20february2002@gmail.com</Email>
        </Detail>
      </User>
      <Button>Follow</Button>
    </Card>
  );
};

export default SearchCard;
