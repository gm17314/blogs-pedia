import React from "react";
import styled from "styled-components";
import { headingfont, parafont, titlecolor } from "../Component/Common";
import ProfileSearchCards from "../Component/ProfileSearchCards";
import { TfiPencilAlt } from "react-icons/tfi";

const ProfileLeft = () => {
  const Left = styled.div`
    width: 40%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
    padding-top: 2rem;
  `;
  const Img = styled.img`
    border-radius: 50%;
    height: 13rem;
    width: 13rem;
  `;
  const Name = styled.h2`
    /* color: ${titlecolor}; */
    font-family: ${headingfont};
    font-size: 3.5rem;
    margin-top: 1.5rem;
    margin-left: 4rem;
    & span {
      cursor: pointer;
      margin-left: 1rem;
    }
  `;
  const Email = styled.p`
    color: #5f5d5d;
    font-weight: 500;
    font-size: 2.4rem;
  `;
  const Searchbox = styled.div`
    width: 90%;
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0 0.2rem 0.3rem 0.1rem rgba(194, 189, 189, 0.76);
    border: 1px solid rgba(194, 189, 189, 0.76);
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Input = styled.input`
    width: 80%;
    height: 4rem;
    border-radius: 1.5rem;
    border: 1px solid grey;
    margin: 2rem;
    padding: 1rem;
    outline: 0;
    font-size: 1.6rem;
    font-family: ${parafont};
    background-color: #fdfafac2;
  `;
  return (
    <Left>
      <Img src="https://images.pexels.com/photos/3810915/pexels-photo-3810915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Name>
        Gaurav Maurya{" "}
        <span>
          <TfiPencilAlt />
        </span>
      </Name>
      <Email>gm20february2002@gmail.com</Email>
      <Searchbox>
        <Input placeholder="Search followers..." />
        <ProfileSearchCards />
      </Searchbox>
    </Left>
  );
};

export default ProfileLeft;
