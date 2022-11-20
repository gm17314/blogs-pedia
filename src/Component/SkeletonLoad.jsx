import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoad = () => {
  const Card = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    height: 23rem;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 0 2rem 0.4rem #a7b1bb;
    overflow: hidden;
    background-color: #f4f7fa;
    margin: 2rem;
  `;
  const Left = styled.div`
    height: 90%;
    width: 25%;
  `;
  const Right = styled.div`
    height: 100%;
    width: 70%;
    padding: 1rem 1.5rem;
  `;
  const H2 = styled.h2`
    font-size: 2.5rem;
    text-decoration: none;
    font-weight: bold;
  `;
  const Date = styled.span`
    color: #021f46;
    font-size: 1.3rem;
  `;
  const Content = styled.div`
  margin-top: 2rem;
    width: 100%;
    height: 10rem;

  `;


  const Options = styled.div`
    justify-content: space-between;
    width: 100%;
    height: 2.5rem;
    margin: 0.2rem;
    padding: 0 0.5rem;
  `;

  return (
    <Card>
      <Left><Skeleton baseColor="#dfdbdb" highlightColor="#d2d9dd" height={"100%"} width={"100%"}/></Left>
      <Right>
        <H2>
        <Skeleton baseColor="#dfdbdb" highlightColor="#d1d3d8" height={"20%"} width={"60%"}/>
        </H2>
        <br />
        <Date>
        <Skeleton baseColor="#dfdbdb" highlightColor="#c5cacc" height={"10%"} width={"30%"}/>
        </Date>
        <Content>
           <Skeleton baseColor="#dfdbdb" highlightColor="#c5cccc" height={"70%"} width={"100%"}/>
        </Content>
        <Options>
         <Skeleton baseColor="#dfdbdb" highlightColor="#c7c7ca" height={"80%"} width={"90%"}/>
        </Options>
      </Right>
    </Card>
  );
};

export default SkeletonLoad;
