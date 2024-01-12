
import "./HomePage.css";


import React from "react";
import { useEffect, useState } from "react";

const HomePage = () => {

  const [timer,setTimer]= useState(0)
  const [count,setCount]=useState(0)
  const [isTrue,setIsTrue]=useState(false)


  useEffect(()=>{
    let interval;
    if(isTrue){
       interval = setInterval(()=>{
        setTimer(timer+1)
      },1000)
    }

    return () =>{
      clearInterval(interval)
    } 
      

  },[timer,isTrue])


  return (
    <div className="container">
      <h1 className="timer">Timer:{timer}</h1>
      <h2 className="count">{count}</h2>
      <button onClick={()=>setIsTrue(!isTrue)} className="btn timer-btn">{isTrue?"Pause":"Start"}</button>
      <button onClick={()=>setCount(count+1)} className="btn count-btn">Count</button>
      <button onClick={()=>{setTimer(0);setCount(0);setIsTrue(false)}} className="btn reset-btn">Reset</button>
    </div>
  );
};

export default HomePage;
