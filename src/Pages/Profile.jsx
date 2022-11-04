import React from "react";
import styled from "styled-components";
import ProfileLeft from "../Component/ProfileLeft";
import ProfileRight from "../Component/ProfileRight";

const Profile = () => {
  const Profile = styled.div`
    width: 100%;
    min-height: 97vh;
    display: flex;
    background-color: #d6e4f0;
  `;
  return (
    <Profile>
      <ProfileLeft/>
      <ProfileRight/>
    </Profile>

  );
};

export default Profile;
