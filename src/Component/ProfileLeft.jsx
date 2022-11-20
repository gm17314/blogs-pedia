import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { headingfont, parafont, titlecolor } from "../Component/Common";
import ProfileSearchCards from "../Component/ProfileSearchCards";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../Firebaseconfig";
import { AuthContext } from "../AuthContext";

const ProfileLeft = ({ userID,open }) => {
  const [search, setSearch] = useState("");
  const currentUser = useContext(AuthContext);
  const [currentUserData, setCurrentUserData] = useState();
  const docRef = doc(db, "users", userID);
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", userID), (doc) => {
      setCurrentUserData(doc.data());
    });

    return () => {
      unsub();
    };
    // eslint-disable-next-line
  }, [userID]);

  const name = useRef();
  const handleEdit = async () => {
    var person = prompt("Please enter your name");
    
      if (
        person !== null
      ) {
        await updateDoc(docRef, { displayName:person });
        // await updateDoc(docRef, {  });
    
    }
  };

  const Left = styled.div`
    width: 40%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
    padding-top: 2rem;
    @media (max-width:620px) {
      position:absolute;
      width:100%;
      left:${open?"0%":"-100%"}

    }
  `;
  const Img = styled.img`
    border-radius: 50%;
    height: 13rem;
    width:13rem;
    @media (max-width:620px) {
   width: ${open?"13rem":"0"};}
  `;
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin-top:1rem;
    padding: 0;
    & span {font-size:2.8rem;
      cursor: pointer;
      margin-left: 2.4rem;
      color: #233744;
      border: 1px soild red;
      
    } 
    @media (max-width:620px)  {
      display: ${open?"flex":"none"};
    }

  `
  const Name = styled.h2`
    /* color: ${titlecolor}; */
    font-family: ${headingfont};
    font-size: 3.5rem;
    color: #10181d;

  `;
  const Email = styled.p`
    color: #5f5d5d;
    font-weight: 500;
    font-size: 2.4rem;
    @media (max-width:620px) {
    display: ${open?"inline-block":"none"};}
  `;
  const Searchbox = styled.div`
    width: 90%;
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0 0.2rem 0.3rem 0.1rem rgba(194, 189, 189, 0.76);
    border: 1px solid rgba(194, 189, 189, 0.76);
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Input = styled.input`
    width: 80%;
    height: 4rem;
    border-radius: 1.5rem;
    border: 1px solid grey;
    margin: 2rem;
    padding: 1rem;
    outline: 0;
    font-size: 1.6rem;
    font-family: ${parafont};
    background-color: #fdfafac2;
  `;
  return (
    <Left>
      {/* {console.log(currentUserData)} */}
      <Img src={currentUserData?.photoURL} />
      <Div>
        <Name ref={name}>
          {currentUserData?.displayName}</Name>
        {currentUser.uid === userID && (
          <span onClick={handleEdit}>
            <FaEdit />
          </span>
        )}
      </Div>
      <Email>{currentUserData?.mail}</Email>
      <Searchbox>
        <Input placeholder="Search followers..." value={search} onChange={(event) => setSearch(event.target.value)}/>
        <ProfileSearchCards search={search} following={currentUserData?.following} />
      </Searchbox>
    </Left>
  );
};

export default ProfileLeft;
