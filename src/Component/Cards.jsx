import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { flex } from "./Common";
import Card from "./Card";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Firebaseconfig";
import SkeletonLoad from "./SkeletonLoad";

const Cards = () => {
  const collectionRef = collection(db, "blogs");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const count=[1,1,1]

  //! Realtime Read of todos
  useEffect(() => {
    const unsub = onSnapshot(collectionRef, snapshot => {
      // sorting the data and set it
      setBlogs(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })).sort((p1, p2) => {
          const propertyName = 'date';
          return p1[propertyName] < p2[propertyName] ? 1 : p1[propertyName] > p2[propertyName] ? -1 : 0
      }));
  });
    setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => {
      unsub();
    };
    // eslint-disable-next-line
  }, []);

  const Cards = styled(flex)`
    width: 80%;
    padding: 2rem;
    margin: auto;
    justify-content: start;
    flex-direction: column;
    @media (max-width:620px){
      width:95%;
      
    }
  `;
  return (
    <Cards>
      {loading ? (count.map(()=>(
          <SkeletonLoad/>
      ))):

blogs.map((ele) => {
        return (
          
          <Card
            key={ele.id}
            title={ele.title}
            content={ele.content}
            image={ele.image}
            adminName={ele.adminName}
            adminID={ele.adminID}
            date={ele.date}
            docID={ele.id}
            likes={ele.likes}
          />
        );
      })}
    </Cards>
  );
};
export default Cards;
