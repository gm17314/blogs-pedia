import React from "react";
import styled from "styled-components";
import { titlecolor, headingfont, parafont, flex } from "../Component/Common";
import { FaRegHeart,FaRegEdit } from 'react-icons/fa';
import {MdDeleteForever} from 'react-icons/md';


const MyBlogCard = () => {
  const Card = styled.div`
    display: flex;
    height: 18.7rem;
    width: 94%;
    border-radius: 1rem;
    box-shadow: 0 0 2rem 0.4rem #a7b1bb;
    overflow: hidden;
    background-color: #f4f7fa;
    margin: 2rem;
    margin-top:0;
  `;
  const Left = styled.img`
    height: 100%;
    width: 30%;
  `;
  const Right = styled.div`
    height: 100%;
    width: 70%;
    padding: 1rem 1.5rem;
    `;
  const H2 = styled.h2`
    color: ${titlecolor};
    font-family: ${headingfont};
    font-size: 2.2rem;
  `;
  const Date = styled.span`
    color: grey;
    /* font-family: ${headingfont}; */
    font-size: 1.1rem;
  `;
  const Content = styled.div`
    width: 100%;
    height: 7rem;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid #00000021;
    border-bottom: 1px solid #00000021;
  `;
  const Title = styled.h2`
    color: black;
    font-family: ${parafont};
    font-size: 1.3rem;
  `;
  const Para = styled.p`
    color: black;
    /* font-family: ${parafont}; */
    font-weight: 500;
    font-size: 1.15rem;
  `;
  const Button = styled.button`
  color: white;
  background-color: ${titlecolor};
  font-family: ${headingfont};
  font-weight: 500;
  font-size: 1.8rem;
  border-radius: .4rem;
  padding:.2rem .5rem;
  border: 1px solid blue;
`;
const Options = styled(flex)`
justify-content: space-between;
width: 100%;
height: 2.2rem;
margin:.2rem;
padding:0 .5rem;
`;

const Div = styled(flex)`
width: 4%;
justify-content: space-between;
`
const Like = styled.div`
height:100%;
font-size: 1.5rem;
margin-top:.4rem;
margin-left:.2rem;
color:red;

`
const LikeCount = styled.span`
font-size: 1.5rem;
font-weight: bold;
color:grey;

`
const Edit = styled.div`
height:100%;
font-size: 2rem;
margin-top:.4rem;
color:grey;
`
const Delete = styled.div`
height:100%;
font-size: 2.1rem;
margin-top:.4rem;
color:grey;
`
  return (
    <Card>
      <Left src="https://images.pexels.com/photos/3810915/pexels-photo-3810915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Right>
        <H2>Admin</H2>
        <Date>20feb2002</Date>
        <Content>
          <Title>Anniversary</Title>
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            assumenda voluptatum quaerat inventore labore quam temporibus
          </Para>
        </Content>
        <Button>Read</Button>
        <Options>
          <Div>
          <LikeCount>2</LikeCount>
          <Like>< FaRegHeart/></Like>
          </Div>
          <Edit><FaRegEdit/></Edit>
          <Delete><MdDeleteForever/></Delete>
        </Options>
      </Right>

    </Card>
  );
};

export default MyBlogCard;

