import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { headingfont, titlecolor } from "./Common";


const ProfileSearchCard = ({email,photoURL,displayName,userID}) => {
  const Card = styled.div`
    width: 93%;
    height: 9rem;
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
    height: 6.2rem;
    width: 6.2rem;
  `;
  const Detail = styled.div`
    width: 70%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `;
  const Name = styled.h2`
    /* color: ${titlecolor}; */
    font-family: ${headingfont};
    font-size: 2.5rem;
    cursor:pointer;
    text-decoration: none;
    font-weight:bold;
    color:black;
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
    font-weight: 500;
    font-size: 1.8rem;
    border-radius: 0.4rem;
    padding: 0.2rem 0.4rem;
    border:0;
    cursor:pointer;
  `;
  return (
    <Card>
      <User>
        <Img src={photoURL} />
        <Detail>
          <Name as={Link} to={`/profile/${userID}`}>{displayName}</Name>
          <Email>{email}</Email>
        </Detail>
      </User>
      <Button>Follow</Button>
    </Card>
  );
};

export default ProfileSearchCard;
