import React from "react";
import styled from "styled-components";
import MyBlogCard from "./MyBlogCard";

const MyBlogs = () => {
  

  const Cards = styled.div`
    width: 90%;
    height: 45rem;
    margin: auto;
    /* display: flex; */
    overflow: auto;
    flex-direction: column;
    /* border: 1px solid grey; */
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
      <MyBlogCard />
      <MyBlogCard />
      <MyBlogCard />
      <MyBlogCard />
      <MyBlogCard />
    </Cards>
  );
};
export default MyBlogs;
