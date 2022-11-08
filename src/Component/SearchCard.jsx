import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { headingfont, titlecolor } from "./Common";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../Firebaseconfig";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";

const SearchCard = (props) => {
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
    if (currentUserData.following.includes(props.userID)) {
      var ind = currentUserData.following.indexOf(props.userID);
      currentUserData.following.splice(ind, 1);
    } else {
      currentUserData.following.push(props.userID);
    }
    await updateDoc(docRef, { following: currentUserData.following });
  };

  const Card = styled.div`
    width: 95%;
    height: 8rem;
    display: flex;
    margin: 1.6rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid grey;
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
    height: 6rem;
    width: 6rem;
  `;
  const Detail = styled.div`
    width: 70%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `;
  const Name = styled.h2`
    /* color: ${titlecolor}; */
    cursor:pointer;
    text-decoration: none;
    font-weight:bold;
    font-family: ${headingfont};
    font-size: 2.5rem;
    color:black;
  `;
  const Email = styled.p`
    color: grey;
    font-weight: 500;
    font-size: 1.7rem;
  `;
  const Button = styled.button`
    color: white;
    background-color: #0000ffdb;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 2.3rem;
    border-radius: 0.4rem;
    padding: 0.3rem 0.6rem;
    border: 0;
    cursor: pointer;
  `;
  return (
    <Card>
      <User>
        <Img src={props.photoURL} />
        <Detail>
          <Name as={Link} to={`/profile/${props.adminID}`}>{props.displayName}</Name>
          <Email>{props.email}</Email>
        </Detail>
      </User>
      <Button onClick={handleFollowing}>
              {currentUserData?.following.includes(props.userID)?
                "Unfollow"
               : 
                "Follow"
              }
      </Button>
    </Card>
  );
};

export default SearchCard;
