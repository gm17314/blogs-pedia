import React from "react";
import styled from "styled-components";
import { flex, headingfont } from "../Component/Common";
import MyBlogs from "../Component/MyBlogs";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { mobile } from "./Responsive";

const ProfileRight = ({ userID,open }) => {
  const Right = styled.div`
    width: 60%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    border-left: .2rem solid grey;
     @media (max-width:620px){
      width:${open?"0%":"100%"};
      align-items:center;
      justify-content:flex-start;
    }
  `;
  const Details = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content:center;
      border-bottom: 1px solid grey;
      @media (max-width:620px){
        width:${open?"0%":"100%"};
        justify-content:flex-end;

    }
  `;
  const Title = styled(flex)`
      width: 50%;
      height: 10rem;
      font-weight: bold;
      font-size: 6rem;
      font-family: ${headingfont};
      align-items: center;
      color:#474343;
      /* border: 2px solid green; */
      ${mobile({
      width:"85%",
      alignItems: "flex-end"
    })}   

  `
  const Div = styled(flex)`
  display: none;
    font-size: 5rem;
    width: 100%;
    margin-right: 5rem;
      height: 8rem;
      font-weight: bold;
      font-family: ${headingfont};
      align-items: flex-end;
      color: #1e56a0;
      ${mobile({
      display:"flex"
    })}
  `

  // const TotalBlogs = styled.div`

  //   width: 50%;
  //   height: 10rem;
  //   /* border: 1px solid black; */
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   & label {
  //     color: black;
  //     font-weight: bold;
  //     font-size: 3.5rem;
  //     font-family: ${headingfont};
  //   }
  //   & span {
  //     color: #c71212;
  //     font-weight: 500;
  //     font-size: 3.5rem;
  //     font-family: "Poppins";
  //   }
  // `;
  // const TotalFollowing = styled.div`
  //   width: 50%;
  //   height: 10rem;
  //   /* border: 1px solid black; */
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: space-evenly;
  //   & label {
  //     color: black;
  //     font-weight: bold;
  //     font-size: 3.5rem;
  //     font-family: ${headingfont};
  //   }
  //   & span {
  //     color: #c71212;
  //     font-weight: 500;
  //     font-size: 3.5rem;
  //     font-family: "Poppins";
  //   }
  // `;

  return (
    <Right>
      <Details>
        <Title>
          Your Blogs
        </Title>
        <Link to="/create">
          <Div>
            <FaPencilAlt />
          </Div>
        </Link>

      </Details>
      <MyBlogs userID={userID} />
    </Right>
  );
};

export default ProfileRight;
