import React, { useState, useEffect } from "react";
import Lockr from "lockr";
import { setLockrCounter, setLockrMinions, saveLockr } from "../Hooks/hooks";

const Counter = () => {
  const [state, setState] = useState({
    minions: Lockr.get('minions'),
    counter: Lockr.get('counter'),
  });

  // let minionCost = state.minions * 10 + 6;

  let costCalculator = () => {
    if (state.minions < 20){
      return state.minions * 10 + 6
    } else {
      return state.minions * 50
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setState((state) => ({
        minions: state.minions,
        counter: state.counter + state.minions,
      }));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  
saveLockr(state);
 

  function onClickMinion() {
    if (state.counter < costCalculator()) {
      console.log(`you don't have ${costCalculator()} to spend`);
    } else {
      setState((state) => ({
        minions: state.minions + 1,
        counter: state.counter - costCalculator(),
      }));
      setLockrMinions(state);
      Lockr.set("counter", state.counter - costCalculator());
    }
  }

  const onClickIncrease = (e) => {
    setState((state) => ({
      minions: state.minions,
      counter: state.counter + 1,
    }));
    setLockrCounter(state);
  };

  const onClickSave = () => {
    saveLockr(state);
  };

  const onClickLoad = () => {
    setState(() => ({
      minions: Lockr.get("minions"),
      counter: Lockr.get("counter"),
    }));
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
          Buy A Minion For {costCalculator()}
        </button>
        <br />
        <button className="save_button" onClick={onClickSave}>
          Save Your Progress
        </button>
        <br />
        <button className="load_button" onClick={onClickLoad}>
          Load Your Progress
        </button>
      </div>
    </div>
  );
};

export default Counter;
