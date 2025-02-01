
import React, { useState } from "react";
import {FaStar} from 'react-icons/fa';

function App(){
  const noOfStars = 10;
  //console.log([...Array(noOfStars)]);
  const[rating,setRating] = useState(0);
  const[hover,setHover] = useState(0);

  function handleClick(index){
    setRating(index);
  }

  function handleMouseOver(index){
    setRating(index);
  }

  function handleMouseLeave(){
    setHover(rating);
  }
  return(
    <>
    <h1 style={
      {
        color:"red",
        textAlign:"center",
        marginTop:"100px",
      }
    }>Star Rating</h1>
   
    <div className="center" >
      
      {
        [...Array(noOfStars)].map((_,index)=>{
          index+=1;
          return <FaStar className = {index<=(rating||hover) ? 'active':'not-active'} key={index}
          onClick={()=>{
            handleClick(index)
          }}
          onMouseLeave={()=>{
            handleMouseLeave()
          }}
          onMouseOver={()=>{
            handleMouseOver(index)
          }}
          size = {40}/>
        })
      }
     
    </div>

    <h1 style={
      {
        color:"red",
        textAlign:"center",
        marginTop:"100px",
      }
    }>Your Rating {rating}</h1>
    </>
  )
  
}

export default App;