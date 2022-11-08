import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { db } from '../Firebaseconfig';
import ProfileSearchCard from './ProfileSearchCard';

const ProfileSearchCards = ({following}) => {
  const collectionRef = collection(db, "users");
  const [user, setUser] = useState([]);

  //! Realtime Read of todos
  useEffect(() => {
    const unsub = onSnapshot(collectionRef, (snapshot) => {
      setUser(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });
    // console.log(blogs)
    return () => {
      unsub();
    };

    // eslint-disable-next-line
  }, []);

    const Cards = styled.div`
    width: 100%;
    height: 22.5rem;
    display: flex;
    overflow: auto;
    flex-direction: column;
    /* border:1px solid yellow; */
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
  
    &::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        background-color: grey;
    }
  `;
  return (
    <Cards>
      {user.map((obj)=>{
        return (
        (following.includes(obj.id)) &&
        <ProfileSearchCard 
        displayName = {obj.displayName}
        email = {obj.mail}
        photoURL = {obj.photoURL}
        userID= {obj.id}
        />
        )
      })}
    </Cards>
  )
}
export default ProfileSearchCards