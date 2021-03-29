import React, { useState, useEffect } from "react";
import Lockr from "lockr";

const Counter = () => {
    const [state, setState] = useState({
        minions: 0,
      counter: 6,
    });
    let minionCost = state.minions * 10 + 6;
  
      useEffect(() => {
          const timer = setInterval(() => {
        setState((state) => ({
            minions: state.minions,
          counter: state.counter + state.minions,
        }));
      }, 1000);
      return () => clearInterval(timer);
    }, [])
    
  
    const onClickMinion = () => {
      if (state.counter < minionCost) {
        console.log(`you don't have ${minionCost} to spend`);
      } else {
        setState((state) => ({
            minions: state.minions + 1,
          counter: state.counter - minionCost,
        }));
      }
    };

  const onClickIncrease = (e) => {
    // e.preventDefault();
    // Lockr.set('counter', counter)
    setState((state) => ({
        minions: state.minions,
        counter: state.counter + 1,
    }));
    // Lockr.set("counter", counter);
  };

  return (
    <div className="counter">
      <p>{state.counter}</p>
      <button className="increase" onClick={onClickIncrease}>
        Increase
      </button>
      <div className="shopCard">
        <h3>Shop</h3>
        <p>Current Number Of Minions: {state.minions}</p>
        <button className="minion" onClick={onClickMinion}>
          Buy A Minion For {minionCost}
        </button>
      </div>
    </div>
  );
};

export default Counter;
