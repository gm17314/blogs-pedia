import { collection,getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { flex, parafont } from "../Component/Common";
import { db } from "../Firebaseconfig";

const ReadBlog = () => {
  const {docID} = useParams()
  const colRef = collection(db,"blogs")
  const [user,setUser] = useState([]);
  useEffect(()=>{
    const docss = async()=>{
      const data = await getDocs(colRef);
      setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
  };
  docss()
},[])

  const Read = styled.div`
    width: 100%;
    min-height: 97vh;
    background-color: #d6e4f0;
    padding:2rem;
  `; 
  const Box = styled.div`
  display:flex;
  height:45rem;
  width: 80%;
  background-color: #ecf7f7;
  border-radius:.5rem;
  box-shadow:0 0 1rem .1rem #110f0f1f;
  margin: auto;
  @media (max-width:620px){
    margin-top:7rem;
      height:100rem;
      width:70%;
      flex-direction: column;
      align-items: center;
      justify-content: center; 
    }
    @media (max-width:350px){
      height:130rem;
    }
`;
const Left = styled(flex)`
  flex-direction: column;
  width:40%;
  height:100%;
  border-right: 1px solid #cacaca;
  @media (max-width:620px){
      width:95%;
      height:55%;
      border:0;
      border-bottom: 1px solid #cacaca;
    }
  
`
const Image = styled.img`
  width:95%;
  height:95%;
  border-radius:.2rem;
  /* box-shadow:0 0 1rem .1rem #a310101f; */
  
`
const H2 = styled.h2`
  font-size: 4rem;
  text-align: center;
  font-family: ${parafont};
  color: #022249;
  @media (max-width:620px){
     font-size: 6rem;
      
    }
`
const Right = styled.div`
display:flex;
flex-direction: column;
align-items: center;
  width:60%;
  height:100%;
  @media (max-width:620px){
      height:43%;
      width:90%;

      
    }
`
const Title = styled.h2`
  font-size: 2.7rem;
  /* margin:1rem; */
  font-size:3rem;
  font-weight:bold;
  font-family: ${parafont};
  color:#363636;
  /* font-variant: small-caps;/ */

`
const Content = styled.p`
  font-size: 1.6rem;
  margin:1rem;
  margin-top:0;
  font-family: ${parafont};
  height:84%;
  border-top:1px solid grey;
  overflow:auto;

`

  return (
    user.map((elm)=>(
      elm.id===docID && 
        <Read>
          <H2>{`Blog Admin:)${elm.adminName}`}</H2>
      <Box>
      <Left>
        <Image src={elm.image}/>
      </Left>
      <Right>
        <Title>
          {elm.title}
        </Title>
        <Content>
          {elm.content}
        </Content>
      </Right>
      </Box>
        </Read>
        
      ))
  )
};

export default ReadBlog;
