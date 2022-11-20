import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { db } from "../Firebaseconfig";
import { headingfont, titlecolor } from "./Common";


const ProfileSearchCard = ({email,photoURL,displayName,userID,adminID}) => {

  const currentUser = useContext(AuthContext);
  const [currentUserData, setCurrentUserData] = useState();
  const docRef = doc(db, "users", currentUser.uid);
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
      setCurrentUserData(doc.data());
    });
    // console.log(blogs)
    return () => {
      unsub();
    };
    // eslint-disable-next-line
  }, []);
  const handleFollowing = async () => {
    if (currentUserData.following.includes(userID)) {
      var ind = currentUserData.following.indexOf(userID);
      currentUserData.following.splice(ind, 1);
    } else {
      currentUserData.following.push(userID);
    }
    await updateDoc(docRef, { following: currentUserData.following });
  };


  const Card = styled.div`
    width: 93%;
    height: 9rem;
    display: flex;
    margin: 1.6rem;
    justify-content: space-between;
    align-items: center;
    border-bottom:.2rem solid grey;
    
  `;
  const User = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
  `;
  const Img = styled.img`
    border-radius: 50%;
    height: 6.2rem;
    width: 6.2rem;
  `;
  const Detail = styled.div`
    width: 70%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `;
  const Name = styled.h2`
    /* color: ${titlecolor}; */
    font-family: ${headingfont};
    font-size: 2.5rem;
    cursor:pointer;
    text-decoration: none;
    font-weight:bold;
    color:black;
  `;
  const Email = styled.p`
    color: grey;
    font-weight: 500;
    font-size: 1.7rem;
  `;
  const Button = styled.button`
    color: white;
    background-color:#0000ffdb;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 1.8rem;
    border-radius: 0.4rem;
    padding: 0.2rem 0.4rem;
    border:0;
    cursor:pointer;
  `;
  return (
    <Card>
    <User>
      <Img src={photoURL} />
      <Detail>
        <Name as={Link} to={`/profile/${adminID}`}>{displayName}</Name>
        <Email>{email}</Email>
      </Detail>
    </User>
    <Button onClick={handleFollowing}>
            {currentUserData?.following.includes(userID)?
              "UnFollow"
             : 
              "Follow"
            }
    </Button>
  </Card>
  );
};

export default ProfileSearchCard;
