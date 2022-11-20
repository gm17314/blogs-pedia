import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { pagecolor,flex,headingfont,titlecolor,parafont } from '../Component/Common'
import { auth } from '../Firebaseconfig'


const Login = () => {
  
  const [err, setErr] = useState(false);
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth,email,password)
      navigate("/")
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

    const Login = styled(flex)`
        height: 100vh;
        width: 100%;
    `
    const LoginBox = styled.form`
    height: 40rem;
    width: 30%;
    background-color:${pagecolor};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 0 0 1rem 2px  grey;
    @media (max-width:620px){
      width: 50%;
      height:45rem;
    }
`
    const H1 = styled.h2`
    color: ${titlecolor};
    font-family:${headingfont};
    font-size: 4.5rem;
    margin-bottom:2rem;
    `
    const Input = styled.input`
        font-size: 2rem;
        width:80%;
        padding:1rem;
        border-radius:5px;
        border:1px solid grey;
        outline: 0;
        background-color: #fdfafac2;
        font-family:${parafont};
  
        
    `
    const Button = styled.button`
        background-color: ${titlecolor};
        color:white;
        font-family: ${headingfont};
        font-size:3rem;
        padding:.3rem 1.5rem;
        border:0;
        border-radius:5px;
        cursor: pointer;
        transition:all .2s;
        transform:perspective(15rem) rotateX(45deg);
        &:hover{ transform:perspective(30rem) rotateX(0);}
       
    `
    const Error = styled.h2`
        font-size: 2rem;
        color: #c42a2a;
        font-weight:400;

  `
    const Anchor = styled.a`
        font-size:2rem;
        color:${titlecolor};
        cursor: pointer;
    `

  return (
    <Login>
      <LoginBox onSubmit={handleLogin}>
      <H1>Login</H1>
      <Input type="email" placeholder='Enter email...'/>
      <Input type="password" placeholder='Enter password...'/>
      <Button>Login</Button>
      {err && <Error>Something went wrong!!!</Error>}
      <Anchor href='/signup'>Create an account?</Anchor>
      </LoginBox>
    </Login>
  )
}

export default Login
