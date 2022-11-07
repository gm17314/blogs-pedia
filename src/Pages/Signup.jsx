import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import styled from "styled-components";
import {
  pagecolor,
  flex,
  headingfont,
  titlecolor,
  parafont,
} from "../Component/Common";
import { auth } from "../Firebaseconfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../Firebaseconfig";
import { db } from "../Firebaseconfig";
import { doc,setDoc} from "firebase/firestore";
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const displayImage = e.target[3].files[0];
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      const date = new Date().getTime();
      const storageRef = ref(storage, `profileImage/${name + date}`);
      const docRef = doc(db,"users",user.uid)
      await uploadBytesResumable(storageRef, displayImage).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(user, {
              displayName: name,
              photoURL: downloadURL,
            });
            await setDoc(docRef,{id:user.uid,displayName:name,photoURL: downloadURL,following:[],mail:email})
            setErr(false);
          } catch (error) {
            setErr(true);
          }
        });
      });

      navigate("/")
      setErr(false);
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  const Signup = styled(flex)`
    height: 100vh;
    width: 100%;
  `;
  const SignupBox = styled.form`
    height: 46rem;
    width: 30%;
    background-color: ${pagecolor};
    border-radius: 1rem;
    display: flex;
    align-items: center;
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
    padding: 0.8rem;
    margin: 0.5rem;
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
    transform: perspective(15rem) rotateX(45deg);
    &:hover {
      transform: perspective(30rem) rotateX(0);
    }
  `;
  const Label = styled.label`
    width: 80%;
    display: flex;
    align-items: center;
    font-size: 5rem;
    cursor: pointer;
    span {
      font-size: 2rem;
      margin: 0 0.6rem;
      font-family: ${parafont};
      color: #4e4b4b;
    }
  `;
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
      <SignupBox onSubmit={(e) => handleSignup(e)}>
        <H1>Signup</H1>
        <Input
          required
          type="text"
          placeholder="Enter display name..."
          maxLength="10"
        />
        <Input required type="email" placeholder="Enter email..." />
        <Input required type="password" placeholder="Enter password..." />
        <Input style={{ display: "none" }} type="file" id="avatar" />
        <Label htmlFor="avatar">
          <FaImage />
          <span>Choose Your Display Img</span>
        </Label>
        <Button>Signup</Button>
        {err && <Error>Something went wrong!!!</Error>}
        <Anchor href="/login">Click here to Login</Anchor>
      </SignupBox>
    </Signup>
  );
};

export default Signup;
