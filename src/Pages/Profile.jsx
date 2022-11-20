import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProfileLeft from "../Component/ProfileLeft";
import ProfileRight from "../Component/ProfileRight";
import {FaUserSecret } from "react-icons/fa";
import { mobile } from "../Component/Responsive";
import { useState } from "react";

const Profile = () => {
  const { userID } = useParams();
  const [open,setOpen] = useState(false);
  const handleOpen=()=>{
    alert("sda")
    setOpen(!open)
  }

  const Profile = styled.div`
    width: 100%;
    min-height: 97vh;
    display: flex;
    background-color: #d6e4f0;
    z-index:0;
    ${mobile({
    position: "relative"
  })}
  `;
  const Div = styled.div`
  display: none;
  font-size: 5rem;
  position: absolute;
  cursor:pointer;
  color: #0e376d;
  top: 1%;
  left:3%;
  ${mobile({
      display:"flex"
    })}
  `

  return (
    <Profile>
      {/* {console.log(userID)} */}
      <Div onClick={handleOpen}><FaUserSecret /></Div>
      <ProfileLeft open={open} userID={userID} />
      <ProfileRight open={open} userID={userID} />
    </Profile>

  );
};

export default Profile;
