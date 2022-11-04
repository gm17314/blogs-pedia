import React from "react";
import styled from "styled-components";
import { headingfont, titlecolor, parafont, flex } from "../Component/Common";
import { FaImage } from "react-icons/fa";
const CreateBlog = () => {
  const Create = styled.div`
    width: 100%;
    min-height: 97vh;
    background-color: #d6e4f0;
  `;
  const H1 = styled.h2`
    color: ${titlecolor};
    font-family: ${headingfont};
    font-size: 4rem;
    text-align: center;
    padding-top: 3rem;
  `;
  const Form = styled.form`
    width: 80%;
    padding: 0 3rem;
    margin: auto;
  `;
  const Input = styled.input`
    font-size: 2rem;
    width: 50%;
    padding: 0 1rem;
    border: 0;
    border-bottom: 3px solid #275877c2;
    outline: 0;
    background-color: inherit;
    font-family: ${parafont};
  `;
  const H2 = styled.h2`
    color: black;
    font-variant: small-caps;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 3rem;
    color: #5a5858;
    padding: 1rem;
    padding-left: 0;
    margin-top: 2rem;
  `;
  const Content = styled.textarea`
    font-size: 2rem;
    width: 100%;
    height: 20rem;
    padding: 1rem;
    border-radius: 5px;
    border: 0;
    background-color: #deedf1c2;
    font-family: ${parafont};
    box-shadow: 0 0 0.4rem 0.4rem #95aeb6c2;
  `;
  const Label = styled.label`
    width: 80%;
    display: flex;
    align-items: center;
    font-size: 5rem;
    cursor: pointer;
    color: #5a5858;
    span {
      font-size: 2rem;
      margin: 0 1rem;
      font-family: ${parafont};
      color: #4e4b4b;
    }
  `;
  const Img = styled.input`
    font-size: 2rem;
    width: 50%;
    padding: 0 1rem;
    border: 0;
    border-bottom: 3px solid #275877c2;
    outline: 0;
    background-color: inherit;
    font-family: ${parafont};
  `;
  const Div=styled(flex)`
    
  `
    const Button = styled.button`
    color: white;
    background-color: ${titlecolor};
    font-family: ${headingfont};
    font-weight: 800;
    font-size: 2.5rem;
    border-radius: .4rem;
    padding:.5rem 1rem;
    border: 1px solid blue;
    margin:auto;
    margin-top:1.5rem;
  `;

  return (
    <Create>
      <H1>Create Blog</H1>
      <Form>
        <H2>Write Blog Title👇</H2>
        <Input placeholder="Title..." />
        <H2>Content👀</H2>
        <Content placeholder="Content..." />
        <Img style={{ display: "none" }} type="file" id="avatar" />
        <Label htmlFor="avatar">
          <FaImage />
          <span>Choose Image for this blog </span>
        </Label>
        <Div>
        <Button>Publish</Button>
        </Div>
      </Form>
    </Create>
  );
};

export default CreateBlog;
