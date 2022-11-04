import React from "react";
import { FaImage } from "react-icons/fa";
import styled from "styled-components";
import {
  pagecolor,
  flex,
  headingfont,
  titlecolor,
  parafont,
} from "../Component/Common";

const Signup = () => {
  const Signup = styled(flex)`
    height: 90vh;
    width: 100%;
  `;
  const SignupBox = styled(flex)`
    height: 46rem;
    width: 30%;
    background-color: ${pagecolor};
    border-radius: 1rem;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 0 0 1rem 2px grey;
  `;
  const H1 = styled.h2`
    color: ${titlecolor};
    font-family: ${headingfont};
    font-size: 4.5rem;
    margin-bottom: 2rem;
  `;
  const Input = styled.input`
    font-size: 2rem;
    width: 80%;
    padding: .8rem;
    margin:.5rem;
    border-radius: 5px;
    border: 1px solid grey;
    outline: 0;
    background-color: #fdfafac2;
    font-family: ${parafont};
  `;
  const Button = styled.button`
    background-color: ${titlecolor};
    color: white;
    font-family: ${headingfont};
    font-size: 3rem;
    padding: 0.3rem 1.5rem;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    transform:perspective(15rem) rotateX(45deg);
    &:hover{ transform:perspective(30rem) rotateX(0);}
  `;
    const Label = styled.label`
    width: 80%;
    display: flex;
    align-items: center;
    font-size: 5rem;
    cursor: pointer;
    span {
      font-size: 2rem;
      margin: 0 .6rem;
      font-family: ${parafont};
      color: #4e4b4b;
    }
    `
  const Error = styled.h2`
    font-size: 2rem;
    color: #c42a2a;
    font-weight: 400;
  `;
  const Anchor = styled.a`
    font-size: 2rem;
    color: ${titlecolor};
    cursor: pointer;
  `;

  return (
    <Signup>
      <SignupBox>
        <H1>Signup</H1>
        <Input type="text" placeholder="Enter display name..." maxLength="10"/>
        <Input type="email" placeholder="Enter email..." />
        <Input type="password" placeholder="Enter password..." />
        <Input style={{ display: "none" }} type="file" id="avatar" />
        <Label htmlFor="avatar">
          <FaImage />
          <span>Choose Your Display Img</span>
        </Label>
        <Button>Signup</Button>
        <Error>Something went wrong!!!</Error>
        <Anchor href="/login">Click here to Login</Anchor>
      </SignupBox>
    </Signup>
  );
};

export default Signup;
