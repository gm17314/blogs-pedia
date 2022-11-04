import React from "react";
import styled from "styled-components";
import { headingfont} from "../Component/Common";
import MyBlogs from "../Component/MyBlogs";

const ProfileRight = () => {
  const Right = styled.div`
    width: 60%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    border-left: 2px solid grey;
  `;
  const Details = styled.div`
    width: 100%;
    height: 10rem;
    /* border: 2px solid green; */
    display: flex;
  `;
  const TotalBlogs = styled.div`
    width: 50%;
    height: 10rem;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    & label {
      color: black;
      font-weight: bold;
      font-size: 3.5rem;
      font-family: ${headingfont};
    }
    & span {
      color: #c71212;
      font-weight: 500;
      font-size: 3.5rem;
      font-family: "Poppins";
    }
  `;
  const TotalFollowing = styled.div`
    width: 50%;
    height: 10rem;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    & label {
      color: black;
      font-weight: bold;
      font-size: 3.5rem;
      font-family: ${headingfont};
    }
    & span {
      color: #c71212;
      font-weight: 500;
      font-size: 3.5rem;
      font-family: "Poppins";
    }
  `;
  return (
    <Right>
      <Details>
        <TotalBlogs>
          <span>12</span>
          <label>Blogs</label>
        </TotalBlogs>
        <TotalFollowing>
          <span>1 Bilion</span>
          <label>Followers</label>
        </TotalFollowing>
      </Details>
      <MyBlogs />
    </Right>
  );
};

export default ProfileRight;
