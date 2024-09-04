import React, { useState } from 'react';







const Card = ({question,options,answer}) => {
  let [Count,setCount] = useState(1)
  
  const next = ()=>{
    setCount(Count+1)
    if (Count >= 10) {
      alert("compleate")      
      setCount(Count = 1)
      return
    }
  }
  const previes = ()=>{
    setCount(Count-1)
    if (Count <= 1) {    
      setCount(Count = 1)
      return
    }
  }
  return (
    <div className="quizContainer">
      
      <div className="chideofquiz">
        <h2><span style={{marginRight:"10px"}}>{Count}</span>{question}</h2>
        <div className="options">
          <ol>
            <li>{options}</li>
            <li>{options}</li>
            <li>{options}</li>
            <li>{options}</li>
          </ol>
        </div>
        <div className="buttons">
          <button onClick={previes}>previes</button>
          <button onClick={next}>Next</button>
        </div>
      </div>
    </div>
  );

};



const Estion = ({Count,quiestion,options}) => {
  return (
    <div className="quizContainer">
      <div className="chideofquiz">
        <h2>{Count}What is Programming?</h2>
        <div className="options">
          <ol>
            <li>Programming is a simle word</li>
            <li>Programming is a computer language</li>
            <li>Programming is a computer softwear</li>
            <li>Programming is a computer hardwear</li>
          </ol>
        </div>
        <div className="buttons">
          <button>previes</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
