import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProfileLeft from "../Component/ProfileLeft";
import ProfileRight from "../Component/ProfileRight";

const Profile = () => {
const {userID} = useParams();


  const Profile = styled.div`
    width: 100%;
    min-height: 97vh;
    display: flex;
    background-color: #d6e4f0;
  `;
  return (
    <Profile>
      {console.log(userID)}
      <ProfileLeft userID={userID}/>
      <ProfileRight userID={userID}/>
    </Profile>

  );
};

export default Profile;
